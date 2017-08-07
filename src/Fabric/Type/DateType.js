import React from 'react';
import { DatePicker, DayOfWeek } from 'office-ui-fabric-react/lib/DatePicker';
import BaseDateType from '../../Type/DateType';
import AbstractRenderer from './AbstractRenderer';

const DayPickerStrings = {
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],

    shortMonths: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],

    days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ],

    shortDays: [
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S'
    ],

    goToToday: 'Go to today',
    prevMonthAriaLabel: 'Go to previous month',
    nextMonthAriaLabel: 'Go to next month',
    prevYearAriaLabel: 'Go to previous year',
    nextYearAriaLabel: 'Go to next year'
};

export default class DateType extends BaseDateType {
    static defaultProps = {
        doRenderOperatorList: AbstractRenderer.doRenderOperatorList(),
    };

    /**
     * @inheritDoc
     */
    doRenderValueInput(value, onChange) {
        return <DatePicker
            value={value}
            firstDayOfWeek={DayOfWeek.Monday}
            strings={DayPickerStrings}
            placeholder='Select a date...'
            onSelectDate={(val) => onChange(val)}
        />
    }
}
