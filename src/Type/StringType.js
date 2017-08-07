import React from 'react';
import AbstractType  from './AbstractType';

const FILTER_EQUAL = 'EQUAL';
const FILTER_NOT_EQUAL = 'NOT_EQUAL';
const FILTER_EMPTY = 'EMPTY';
const FILTER_NOT_EMPTY = 'NOT_EMPTY';
const FILTER_CONTAINS = 'CONTAINS';
const FILTER_NOT_CONTAINS = 'NOT_CONTAINS';
const FILTER_STARTS_WITH = 'STARTS_WITH';
const FILTER_ENDS_WITH = 'ENDS_WITH';
const FILTER_IN = 'IN';
const FILTER_NOT_IN = 'NOT_IN';

export default class StringType extends AbstractType {
    static defaultOperator = FILTER_EQUAL;

    /**
     * @inheritDoc
     */
    getOperators() {
        return {
            [FILTER_EQUAL]: 'Equal',
            [FILTER_NOT_EQUAL]: 'Not Equal',
            [FILTER_EMPTY]: 'Empty',
            [FILTER_NOT_EMPTY]: 'Not Empty',
            [FILTER_CONTAINS]: 'Contains',
            [FILTER_NOT_CONTAINS]: 'Not Contains',
            [FILTER_STARTS_WITH]: 'Starts With',
            [FILTER_ENDS_WITH]: 'Ends With',
            [FILTER_IN]: 'In',
            [FILTER_NOT_IN]: 'Not In',
        };
    }

    /**
     * @inheritDoc
     */
    doRenderValueInput(value, onChange) {
        return <input value={value} onChange={(e) => onChange(e.target.value)}/>;
    }
}
