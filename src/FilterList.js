import React from 'react';
import PropTypes from 'prop-types';
import { OrderedMap, Set } from 'immutable';
import { debounce } from 'throttle-debounce';
import { FilterItem } from './FilterItem';
import { Filter } from './Filter';

const emptyFilter = new OrderedMap();

export class FilterList extends React.Component {
    nextId = 0;

    static propTypes = {
        fields: PropTypes.instanceOf(Set).isRequired,
        onChange: PropTypes.func,
        onSubmit: PropTypes.func,
        valueChangeDelay: PropTypes.number,
        addLabel: PropTypes.string,
        removeLabel: PropTypes.string,
        clearLabel: PropTypes.string,
        submitLabel: PropTypes.string,
        doRenderFilterButtons: PropTypes.func,
    };

    static defaultProps = {
        valueChangeDelay: 200,
        removeLabel: 'x',
        addLabel: '+ Add filter',
        clearLabel: '- Clear all',
        submitLabel: 'Submit',
    };

    constructor(props) {
        super(props);

        if (props.doRenderFilterButtons) {
            this.doRenderFilterButtons = props.doRenderFilterButtons.bind(this);
        }

        // delayed usefull when interact with server side
        // it prevents too many request to server.
        this.onChangeDebounced = debounce(props.valueChangeDelay, false, props.onChange);

        this.state = {
            filters: emptyFilter,
        };
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.props.onChange && this.nextId) {
            // should trigg only when `onValueChange` & `onOperatorChange` ?
            this.onChangeDebounced(nextState.filters.toList().toJS(), this);
        }
    }

    cloneFilter(filter) {
        return Filter.create({ ...filter });
    }

    getFilters() {
        return this.state.filters.toList().toJS();
    }

    submit = (e) => {
        if (this.props.onSubmit) {
            return this.props.onSubmit(this.getFilters(), this);
        }
    };

    addFilter = () => {
        const filter = this.props.fields.first();

        this.setState({
            filters: this.state.filters.set(++this.nextId, this.cloneFilter(filter))
        });
    };

    removeFilter = (filterId) => {
        this.setState({
            filters: this.state.filters.delete(filterId)
        });
    };

    clearFilters = () => {
        this.setState({
            filters: emptyFilter,
        });
    };

    onFieldChange = (filterId, name) => {
        const filter = this.props.fields.find(f => f.name === name);

        this.setState({
            filters: this.state.filters.set(filterId, this.cloneFilter(filter))
        });
    };

    onValueChange = (filterId, value) => {
        this.updateFilter(filterId, 'value', value);
    };

    onOperatorChange = (filterId, operator) => {
        this.updateFilter(filterId, 'operator', operator);
    };

    updateFilter(filterId, field, value) {
        const filter = this.findById(filterId);
        filter[field] = value;

        this.setState({
            filters: this.state.filters.set(filterId, filter)
        });
    }

    findById(filterId) {
        return this.state.filters.get(filterId);
    }

    isEmpty() {
        return this.state.filters.isEmpty();
    }

    doRenderList() {
        if (this.isEmpty()) {
            return null;
        }

        const { filters } = this.state;

        return (
            <ul className="dos-filter__list">
                {filters.entrySeq().map(this.doRenderFilterItem)}
            </ul>
        );
    }

    doRenderFilterItem = ([filterId, filter]) => {
        const { fields, removeLabel } = this.props;

        return <FilterItem
            key={filterId}
            filter={filter}
            fields={fields}
            removeLabel={removeLabel}
            onRemoveClick={() => this.removeFilter(filterId)}
            onFieldChange={(name) => this.onFieldChange(filterId, name)}
            onValueChange={(value) => this.onValueChange(filterId, value)}
            onOperatorChange={(operator) => this.onOperatorChange(filterId, operator)}
        />
    };

    doRenderFilterButtons(filterList) {
        const { addLabel, clearLabel, submitLabel } = filterList.props;

        return (
            <div className="dos-filter-panel__footer--buttons">
                <button onClick={filterList.addFilter}>{addLabel}</button>
                <button onClick={filterList.clearFilters} disabled={filterList.isEmpty()}>{clearLabel}</button>
                <button onClick={filterList.submit} disabled={filterList.isEmpty()}>{submitLabel}</button>
            </div>
        )
    }

    render() {
        const filterButtons = this.doRenderFilterButtons(this);

        return (
            <div className="dos-filter-panel">
                <div className="dos-filter-panel__body">
                    {this.doRenderList()}
                </div>
                {filterButtons && <div className="dos-filter-panel__footer">
                    {filterButtons}
                </div>}
            </div>
        );
    }
}
