import React from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import BaseExistsType from '../../Type/ExistsType';

export default class ExistsType extends BaseExistsType {
    /**
     * @inheritDoc
     */
    doRenderValueInput(val, onChange) {
        const { choice } = this.props;
        const options = [
            { key: choice.yesValue, text: choice.yesLabel },
            { key: choice.noValue, text: choice.noLabel },
        ];

        return <Dropdown
            style={{ width: 100 }}
            defaultSelectedKey={val}
            options={options}
            onChanged={(item) => onChange(item.key)}
        />
    }
}
