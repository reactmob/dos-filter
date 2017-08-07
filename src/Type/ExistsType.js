import React from 'react';
import PropTypes from 'prop-types';
import AbstractType  from './AbstractType';

const FILTER_EQUAL = 'EQUAL';

export class ChoiceConfig {
    constructor({ yesLabel = 'Yes', yesValue = 1, noLabel = 'No', noValue = 0 } = {}) {
        this.yesLabel = yesLabel;
        this.yesValue = yesValue;
        this.noLabel = noLabel;
        this.noValue = noValue;
    }

    static create(arg) {
        return new ChoiceConfig(arg);
    }
}

export default class ExistsType extends AbstractType {
    static defaultOperator = FILTER_EQUAL;

    static propTypes = {
        choice: PropTypes.instanceOf(ChoiceConfig),
    };

    static defaultProps = {
        choice: ChoiceConfig.create(),
    };

    validate(value) {
        return parseInt(value);
    }

    // no operator
    doRenderOperatorList() {
        return null;
    }

    doRenderValueInput(value, onChange) {
        const { choice } = this.props;

        return (
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                <option key={choice.yesValue} value={choice.yesValue}>{choice.yesLabel}</option>
                <option key={choice.noValue} value={choice.noValue}>{choice.noLabel}</option>
            </select>
        );
    }
}
