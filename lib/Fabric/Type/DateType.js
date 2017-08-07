'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePicker = require('office-ui-fabric-react/lib/DatePicker');

var _DateType = require('../../Type/DateType');

var _DateType2 = _interopRequireDefault(_DateType);

var _AbstractRenderer = require('./AbstractRenderer');

var _AbstractRenderer2 = _interopRequireDefault(_AbstractRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DayPickerStrings = {
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

    shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

    goToToday: 'Go to today',
    prevMonthAriaLabel: 'Go to previous month',
    nextMonthAriaLabel: 'Go to next month',
    prevYearAriaLabel: 'Go to previous year',
    nextYearAriaLabel: 'Go to next year'
};

var DateType = function (_BaseDateType) {
    _inherits(DateType, _BaseDateType);

    function DateType() {
        _classCallCheck(this, DateType);

        return _possibleConstructorReturn(this, (DateType.__proto__ || Object.getPrototypeOf(DateType)).apply(this, arguments));
    }

    _createClass(DateType, [{
        key: 'doRenderValueInput',


        /**
         * @inheritDoc
         */
        value: function doRenderValueInput(value, onChange) {
            return _react2.default.createElement(_DatePicker.DatePicker, {
                value: value,
                firstDayOfWeek: _DatePicker.DayOfWeek.Monday,
                strings: DayPickerStrings,
                placeholder: 'Select a date...',
                onSelectDate: function onSelectDate(val) {
                    return onChange(val);
                }
            });
        }
    }]);

    return DateType;
}(_DateType2.default);

DateType.defaultProps = {
    doRenderOperatorList: _AbstractRenderer2.default.doRenderOperatorList()
};
exports.default = DateType;
//# sourceMappingURL=DateType.js.map