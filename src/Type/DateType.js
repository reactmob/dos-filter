import React from 'react';
import StringType  from './StringType';

const FILTER_EQUAL = 'EQUAL';
const FILTER_BETWEEN = 'BETWEEN';
const FILTER_NOT_BETWEEN = 'NOT_BETWEEN';
const FILTER_GREATER_THAN = 'GREATER_THAN';
const FILTER_GREATER_THAN_EQUALS = 'GREATER_THAN_EQUALS';
const FILTER_LESS_THAN = 'LESS_THAN';
const FILTER_LESS_THAN_EQUALS = 'LESS_THAN_EQUALS';

export default class DateType extends StringType {
    static defaultOperator = FILTER_EQUAL;

    /**
     * @inheritDoc
     */
    getOperators() {
        return {
            [FILTER_EQUAL]: 'On',
            [FILTER_BETWEEN]: 'Between',
            [FILTER_NOT_BETWEEN]: 'Not Between',
            [FILTER_GREATER_THAN]: 'After',
            [FILTER_GREATER_THAN_EQUALS]: 'On or After',
            [FILTER_LESS_THAN]: 'Before',
            [FILTER_LESS_THAN_EQUALS]: 'On or Before',
        };
    }

    /**
     * @inheritDoc
     */
    isSingleValue(operator) {
        return [FILTER_BETWEEN, FILTER_NOT_BETWEEN].indexOf(operator) === -1;
    }

    /**
     * @inheritDoc
     */
    validate(val) {
        // TODO: validate date value

        return val;
    }

    /**
     * @inheritDoc
     */
    doRenderValueInput(value, onChange) {
        return <input type="date" value={value} onChange={(e) => onChange(e.target.value)}/>;
    }
}
