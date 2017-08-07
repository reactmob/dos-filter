import React from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import BaseChoiceType from '../../Type/ChoiceType';
import AbstractRenderer from './AbstractRenderer';

export default class ChoiceType extends BaseChoiceType {
    static defaultProps = {
        doRenderOperatorList: AbstractRenderer.doRenderOperatorList(),
    };

    /**
     * @inheritDoc
     */
    doRenderValueInput(val, onChange) {
        const { listProps } = this.props;
        const { items, disabled } = this.state;
        const options = items.map(item => {
            return { key: this.getFieldValue(item), text: this.getFieldLabel(item) }
        });

        return <Dropdown
            style={{ width: 200 }}
            disabled={disabled}
            defaultSelectedKey={val}
            options={options}
            onChanged={(item) => onChange(item.key)}

            {...listProps}
        />
    }
}
