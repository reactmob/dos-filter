import React from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { CommandButton } from 'office-ui-fabric-react/lib/Button';
import { FilterItem as BaseFilterItem } from '../FilterItem';

export class FilterItem extends BaseFilterItem {
    doRenderFields() {
        const { fields, onFieldChange, filter } = this.props;
        const options = fields.map(({ name, label }) => {
            return { key: name, text: label }
        }).toJS();

        return (
            <Dropdown
                style={{ width: 200 }}
                defaultSelectedKey={filter.name}
                onChanged={(item) => onFieldChange(item.key)}
                options={options}
            />
        )
    }

    doRenderRemoveFilter(onRemoveClick, removeLabel) {
        return <CommandButton onClick={onRemoveClick} title={removeLabel} iconProps={{ iconName: 'Trash' }}/>;
    }
}
