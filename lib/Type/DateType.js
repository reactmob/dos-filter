'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StringType2 = require('./StringType');

var _StringType3 = _interopRequireDefault(_StringType2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FILTER_EQUAL = 'EQUAL';
var FILTER_BETWEEN = 'BETWEEN';
var FILTER_NOT_BETWEEN = 'NOT_BETWEEN';
var FILTER_GREATER_THAN = 'GREATER_THAN';
var FILTER_GREATER_THAN_EQUALS = 'GREATER_THAN_EQUALS';
var FILTER_LESS_THAN = 'LESS_THAN';
var FILTER_LESS_THAN_EQUALS = 'LESS_THAN_EQUALS';

var DateType = function (_StringType) {
    _inherits(DateType, _StringType);

    function DateType() {
        _classCallCheck(this, DateType);

        return _possibleConstructorReturn(this, (DateType.__proto__ || Object.getPrototypeOf(DateType)).apply(this, arguments));
    }

    _createClass(DateType, [{
        key: 'getOperators',


        /**
         * @inheritDoc
         */
        value: function getOperators() {
            var _ref;

            return _ref = {}, _defineProperty(_ref, FILTER_EQUAL, 'On'), _defineProperty(_ref, FILTER_BETWEEN, 'Between'), _defineProperty(_ref, FILTER_NOT_BETWEEN, 'Not Between'), _defineProperty(_ref, FILTER_GREATER_THAN, 'after'), _defineProperty(_ref, FILTER_GREATER_THAN_EQUALS, 'on or after'), _defineProperty(_ref, FILTER_LESS_THAN, 'before'), _defineProperty(_ref, FILTER_LESS_THAN_EQUALS, 'on or before'), _ref;
        }

        /**
         * @inheritDoc
         */

    }, {
        key: 'isSingleValue',
        value: function isSingleValue(operator) {
            return [FILTER_BETWEEN, FILTER_NOT_BETWEEN].indexOf(operator) === -1;
        }

        /**
         * @inheritDoc
         */

    }, {
        key: 'validate',
        value: function validate(val) {
            // TODO: validate date value

            return val;
        }

        /**
         * @inheritDoc
         */

    }, {
        key: 'doRenderValueInput',
        value: function doRenderValueInput(value, _onChange) {
            return _react2.default.createElement('input', { type: 'date', value: value, onChange: function onChange(e) {
                    return _onChange(e.target.value);
                } });
        }
    }]);

    return DateType;
}(_StringType3.default);

DateType.defaultOperator = FILTER_EQUAL;
exports.default = DateType;
//# sourceMappingURL=DateType.js.map