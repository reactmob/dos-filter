import React from 'react';
import { FilterItem } from './FilterItem';
import { FilterList as BaseFilterList } from '../FilterList';

export class FilterList extends BaseFilterList {
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
    }
}
