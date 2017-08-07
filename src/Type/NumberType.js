import React from 'react';
import StringType  from './StringType';

const FILTER_EQUAL = 'EQUAL';
const FILTER_NOT_EQUAL = 'NOT_EQUAL';
const FILTER_CONTAINS = 'CONTAINS';
const FILTER_NOT_CONTAINS = 'NOT_CONTAINS';
const FILTER_IN = 'IN';
const FILTER_NOT_IN = 'NOT_IN';
const FILTER_BETWEEN = 'BETWEEN';
const FILTER_NOT_BETWEEN = 'NOT_BETWEEN';
const FILTER_GREATER_THAN = 'GREATER_THAN';
const FILTER_GREATER_THAN_EQUALS = 'GREATER_THAN_EQUALS';
const FILTER_LESS_THAN = 'LESS_THAN';
const FILTER_LESS_THAN_EQUALS = 'FILTER_LESS_THAN_EQUALS';

export default class NumberType extends StringType {
    static defaultOperator = FILTER_EQUAL;

    /**
     * @inheritDoc
     */
    getOperators() {
        return {
            [FILTER_EQUAL]: 'EQUAL',
            [FILTER_NOT_EQUAL]: 'NOT_EQUAL',
            [FILTER_CONTAINS]: 'CONTAINS',
            [FILTER_NOT_CONTAINS]: 'NOT_CONTAINS',
            [FILTER_IN]: 'IN',
            [FILTER_NOT_IN]: 'NOT_IN',
            [FILTER_BETWEEN]: 'Between',
            [FILTER_NOT_BETWEEN]: 'Not Between',
            [FILTER_GREATER_THAN]: 'GREATER_THAN',
            [FILTER_GREATER_THAN_EQUALS]: 'Greater than equals',
            [FILTER_LESS_THAN]: 'LESS_THAN',
            [FILTER_LESS_THAN_EQUALS]: 'Less than equals',
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
        if (Array.isArray(val)) {
            return [this.validate(val[0]), this.validate(val[1])]
        }

        const value = parseInt(val);

        return isNaN(value) ? '' : value;
    }

    /**
     * @inheritDoc
     */
    doRenderValueInput(value, onChange) {
        return <input type="number" value={value} onChange={(e) => onChange(e.target.value)}/>;
    }
}
