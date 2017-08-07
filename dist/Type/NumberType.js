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
var FILTER_NOT_EQUAL = 'NOT_EQUAL';
var FILTER_CONTAINS = 'CONTAINS';
var FILTER_NOT_CONTAINS = 'NOT_CONTAINS';
var FILTER_IN = 'IN';
var FILTER_NOT_IN = 'NOT_IN';
var FILTER_BETWEEN = 'BETWEEN';
var FILTER_NOT_BETWEEN = 'NOT_BETWEEN';
var FILTER_GREATER_THAN = 'GREATER_THAN';
var FILTER_GREATER_THAN_EQUALS = 'GREATER_THAN_EQUALS';
var FILTER_LESS_THAN = 'LESS_THAN';
var FILTER_LESS_THAN_EQUALS = 'FILTER_LESS_THAN_EQUALS';

var NumberType = function (_StringType) {
    _inherits(NumberType, _StringType);

    function NumberType() {
        _classCallCheck(this, NumberType);

        return _possibleConstructorReturn(this, (NumberType.__proto__ || Object.getPrototypeOf(NumberType)).apply(this, arguments));
    }

    _createClass(NumberType, [{
        key: 'getOperators',


        /**
         * @inheritDoc
         */
        value: function getOperators() {
            var _ref;

            return _ref = {}, _defineProperty(_ref, FILTER_EQUAL, 'EQUAL'), _defineProperty(_ref, FILTER_NOT_EQUAL, 'NOT_EQUAL'), _defineProperty(_ref, FILTER_CONTAINS, 'CONTAINS'), _defineProperty(_ref, FILTER_NOT_CONTAINS, 'NOT_CONTAINS'), _defineProperty(_ref, FILTER_IN, 'IN'), _defineProperty(_ref, FILTER_NOT_IN, 'NOT_IN'), _defineProperty(_ref, FILTER_BETWEEN, 'Between'), _defineProperty(_ref, FILTER_NOT_BETWEEN, 'Not Between'), _defineProperty(_ref, FILTER_GREATER_THAN, 'GREATER_THAN'), _defineProperty(_ref, FILTER_GREATER_THAN_EQUALS, 'Greater than equals'), _defineProperty(_ref, FILTER_LESS_THAN, 'LESS_THAN'), _defineProperty(_ref, FILTER_LESS_THAN_EQUALS, 'Less than equals'), _ref;
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
            if (Array.isArray(val)) {
                return [this.validate(val[0]), this.validate(val[1])];
            }

            var value = parseInt(val);

            return isNaN(value) ? '' : value;
        }

        /**
         * @inheritDoc
         */

    }, {
        key: 'doRenderValueInput',
        value: function doRenderValueInput(value, _onChange) {
            return _react2.default.createElement('input', { type: 'number', value: value, onChange: function onChange(e) {
                    return _onChange(e.target.value);
                } });
        }
    }]);

    return NumberType;
}(_StringType3.default);

NumberType.defaultOperator = FILTER_EQUAL;
exports.default = NumberType;
//# sourceMappingURL=NumberType.js.map