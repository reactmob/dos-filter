import React from 'react';
import PropTypes from 'prop-types';

export default class AbstractType extends React.Component {
    static propTypes = {
        onOperatorChange: PropTypes.func,
        onValueChange: PropTypes.func,
        operator: PropTypes.string,
        doRenderValueInput: PropTypes.func,
        doRenderOperatorList: PropTypes.func,
        doRenderDoubleInput: PropTypes.func,
    };

    static defaultProps = {
        value: '',
        onOperatorChange: (value) => {
            console.warn(value)
        },
        onValueChange: (value) => {
            console.warn(value)
        },
    };

    constructor(props) {
        super(props);

        if (props.doRenderDoubleInput) {
            this.doRenderDoubleInput = props.doRenderDoubleInput.bind(this);
        }

        if (props.doRenderValueInput) {
            this.doRenderValueInput = props.doRenderValueInput.bind(this);
        }

        if (props.doRenderOperatorList) {
            this.doRenderOperatorList = props.doRenderOperatorList.bind(this);
        }

        this.state = {
            value: props.value,
            operator: props.operator,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.value !== nextProps.value) {
            this.setState({ value: nextProps.value });
        }

        if (this.state.operator !== nextProps.operator) {
            this.setState({ operator: nextProps.operator });
        }
    }

    onValueChange = (val) => {
        const value = this.validate(val);

        this.setState({ value });

        this.props.onValueChange(value);
    };

    onOperatorChange = (operator) => {
        this.setState({ operator });
        this.props.onOperatorChange(operator);
    };

    /**
     * @abstract
     */
    getOperators() {
        return {};
    }

    /**
     * @param {String} operator
     *
     * @return {boolean}
     */
    isSingleValue(operator) {
        return true;
    }

    /**
     * @param value
     *
     * @return {*}
     */
    validate(value) {
        return value;
    }

    /**
     * @return {*}
     */
    getValueInput() {
        const { value } = this.state;

        switch (false) {
            case this.isSingleValue(this.state.operator):
                const [aValue, bValue] = Array.isArray(value) ? value : [value, ''];

                return this.doRenderDoubleInput(
                    this.doRenderValueInput(aValue, (value) => this.onValueChange([value, bValue])),
                    this.doRenderValueInput(bValue, (value) => this.onValueChange([aValue, value]))
                );

            default:
                return this.doRenderValueInput(value, this.onValueChange);
        }
    }

    /**
     * @abstract
     */
    doRenderValueInput(value, onChange) {
        return null;
    }

    /**
     * @abstract
     */
    doRenderDoubleInput(aInput, bInput) {
        return (
            <div className="dos-filter__type--input--double">
                {aInput} <span>and</span> {bInput}
            </div>
        );
    }

    /**
     * @abstract
     */
    doRenderOperatorList(selected, operators, onOperatorChange) {
        return (
            <select value={selected} onChange={(e) => onOperatorChange(e.target.value)}>
                {Object.keys(operators).map((operator) => {
                    return <option key={operator} value={operator}>{operators[operator]}</option>;
                })}
            </select>
        );
    }

    render() {
        const { operator } = this.state;
        const operators = this.getOperators();
        const operatorList = this.doRenderOperatorList(operator, operators, this.onOperatorChange);

        return (
            <div className="dos-filter__type">
                {operatorList &&
                <div className="dos-filter__type--operator">
                    {operatorList}
                </div>}
                <div className="dos-filter__type--input">
                    {this.getValueInput()}
                </div>
            </div>
        );
    }
}
