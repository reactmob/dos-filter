import React from 'react';
import PropTypes from 'prop-types';
import { is, Set } from 'immutable';
import { Filter } from './Filter';

export class FilterItem extends React.Component {
    static propTypes = {
        onRemoveClick: PropTypes.func,
        onFieldChange: PropTypes.func,
        fields: PropTypes.instanceOf(Set),
        filter: PropTypes.instanceOf(Filter),
        removeLabel: PropTypes.string,
    };

    shouldComponentUpdate(nextProps) {
        const { filter, fields } = this.props;

        return !is(nextProps.filter, filter) || !is(nextProps.fields, fields);
    }

    doRenderFields() {
        const { fields, onFieldChange, filter } = this.props;

        return (
            <select value={filter.name} onChange={(e) => onFieldChange(e.target.value)}>
                {fields.map(({ name, label }) => {
                    return <option key={name} value={name}>{label}</option>
                })}
            </select>
        )
    }

    doRenderFilter() {
        const { filter, onOperatorChange, onValueChange } = this.props;
        const props = Object.assign({
            operator: filter.operator = filter.defaultOperator || filter.type.defaultOperator,
            value: filter.value = filter.defaultValue,
            onOperatorChange,
            onValueChange
        }, filter.options);

        return React.createElement(filter.type, props);
    }

    doRenderRemoveFilter(onRemoveClick, removeLabel) {
        return <button type="button" onClick={onRemoveClick}>{removeLabel}</button>;
    }

    render() {
        const { onRemoveClick, removeLabel } = this.props;

        return (
            <li className="dos-filter__item">
                <div className="dos-filter__item--remove">
                    {this.doRenderRemoveFilter(onRemoveClick, removeLabel)}
                </div>
                <div className="dos-filter__item--field">
                    {this.doRenderFields()}
                </div>
                <div className="dos-filter__item--filter">
                    {this.doRenderFilter()}
                </div>
            </li>
        );
    }
}
