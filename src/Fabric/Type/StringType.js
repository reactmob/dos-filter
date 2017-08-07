import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import BaseStringType from '../../Type/StringType';
import AbstractRenderer from './AbstractRenderer';

export default class StringType extends BaseStringType {
    static defaultProps = {
        doRenderOperatorList: AbstractRenderer.doRenderOperatorList(),

        /**
         * @param {String} value
         * @param {Function} onChange
         *
         * @return {TextField|XML}
         */
        doRenderValueInput: (value, onChange) => {
            return <TextField value={value} onChanged={(val) => onChange(val)}/>;
        },
    }
}
