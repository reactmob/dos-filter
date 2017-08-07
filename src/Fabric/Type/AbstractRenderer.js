import React from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

export default class AbstractRenderer {
    static doRenderOperatorList({ width = 120 } = {}) {
        return (selected, operators, onOperatorChange) => {
            const options = Object.keys(operators).map(operator => {
                return { key: operator, text: operators[operator] }
            });

            return (
                <Dropdown
                    style={{ width: width }}
                    defaultSelectedKey={selected}
                    onChanged={(item) => onOperatorChange(item.key)}
                    options={options}
                />
            )
        }
    }
}
