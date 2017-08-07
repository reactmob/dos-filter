import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import BaseNumberType from '../../Type/NumberType';
import AbstractRenderer from './AbstractRenderer';

export default class NumberType extends BaseNumberType {
    static defaultProps = {
        doRenderOperatorList: AbstractRenderer.doRenderOperatorList({ width: 140 }),
    };

    /**
     * @inheritDoc
     */
    doRenderValueInput(value, onChange) {
        return <TextField type="number" value={value} onChanged={(val) => onChange(val)}/>;
    }
}
