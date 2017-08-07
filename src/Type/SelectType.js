import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete  from 'react-autocomplete';
import { debounce } from 'throttle-debounce';
import AbstractType  from './AbstractType';
import RemoteConfig from './SelectType/RemoteConfig';

const FILTER_EQUAL = 'EQUAL';
const FILTER_NOT_EQUAL = 'NOT_EQUAL';
const FILTER_IN = 'IN';
const FILTER_NOT_IN = 'NOT_IN';

export default class SelectType extends AbstractType {
    static defaultOperator = FILTER_EQUAL;

    static propTypes = {
        displayField: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        valueField: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        remote: PropTypes.instanceOf(RemoteConfig),
        listProps: PropTypes.object,
        items: PropTypes.oneOfType([
            PropTypes.instanceOf(RemoteConfig),
            PropTypes.arrayOf(PropTypes.object)
        ]).isRequired,
    };

    static defaultProps = {
        valueField: 'id',
        displayField: 'label',
    };

    items = [];
    remote = undefined;

    constructor(props) {
        super(props);

        this.remote = props.remote;
        this.items = props.items;

        if (props.items instanceof RemoteConfig) {
            this.remote = props.items;
            this.items = [];
        }

        this.state = {
            value: props.value,
            operator: props.operator,
            items: this.items,
            disabled: false,
        };

        if (this.remote) {
            this.fetchRemote = debounce(this.remote.delay, false, (value) => {
                this.setState({ disabled: true });

                this.remote.fetch(value).then(data => {
                    this.setState({ disabled: false, items: data });
                });
            })
        }
    }

    componentWillMount() {
        this.fetchRemote();
    }

    /**
     * @inheritDoc
     */
    getOperators() {
        return {
            [FILTER_EQUAL]: 'Equal',
            [FILTER_NOT_EQUAL]: 'Not Equal',
            [FILTER_IN]: 'In',
            [FILTER_NOT_IN]: 'Not In',
        };
    }

    renderItem = (item) => {
        return <div key={this.getFieldValue(item)}>{this.getFieldLabel(item)}</div>;
    };

    matchStateToTerm = (item, value) => {
        return this.getFieldLabel(item)
                .toLowerCase()
                .indexOf(value.toLowerCase()) !== -1
            ;
    };

    getFieldValue = (item) => {
        const { valueField } = this.props;

        if (typeof valueField === 'function') {
            return valueField(item);
        }

        return item[valueField];
    };

    getFieldLabel = (item) => {
        const { displayField } = this.props;

        if (typeof displayField === 'function') {
            return displayField(item);
        }

        return item[displayField];
    };

    isRemoteFilter = (value) => {
        return this.remote && this.remote.filter && this.remote.minChar <= value.length;
    };

    isNotCorrectValue = (value) => {
        const { items } = this.state;

        return value && !items.filter(item => this.getFieldLabel(item) === value).length
    };

    /**
     * @inheritDoc
     */
    doRenderValueInput(value, onChange) {
        const { listProps } = this.props;
        const { items, disabled } = this.state;

        return <Autocomplete
            items={items}
            value={value}
            getItemValue={this.getFieldLabel}
            renderItem={this.renderItem}
            shouldItemRender={this.remote ? undefined : this.matchStateToTerm}

            onChange={(e, value) => {
                this.setState({ value });

                if (this.isRemoteFilter(value)) {
                    this.fetchRemote(value);
                }
            }}

            onSelect={(value, item) => {
                // filter value
                onChange(this.getFieldValue(item));

                // textfield value
                this.setState({ value });
            }}

            inputProps={{
                disabled: disabled,
                onBlur: (e) => {
                    if (this.isNotCorrectValue(e.target.value)) {
                        this.setState({ value: '' });
                    }
                }
            }}

            {...listProps}
        />
    }
}
