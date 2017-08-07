'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractType2 = require('./AbstractType');

var _AbstractType3 = _interopRequireDefault(_AbstractType2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FILTER_EQUAL = 'EQUAL';
var FILTER_NOT_EQUAL = 'NOT_EQUAL';
var FILTER_EMPTY = 'EMPTY';
var FILTER_NOT_EMPTY = 'NOT_EMPTY';
var FILTER_CONTAINS = 'CONTAINS';
var FILTER_NOT_CONTAINS = 'NOT_CONTAINS';
var FILTER_STARTS_WITH = 'STARTS_WITH';
var FILTER_ENDS_WITH = 'ENDS_WITH';
var FILTER_IN = 'IN';
var FILTER_NOT_IN = 'NOT_IN';

var StringType = function (_AbstractType) {
    _inherits(StringType, _AbstractType);

    function StringType() {
        _classCallCheck(this, StringType);

        return _possibleConstructorReturn(this, (StringType.__proto__ || Object.getPrototypeOf(StringType)).apply(this, arguments));
    }

    _createClass(StringType, [{
        key: 'getOperators',


        /**
         * @inheritDoc
         */
        value: function getOperators() {
            var _ref;

            return _ref = {}, _defineProperty(_ref, FILTER_EQUAL, 'Equal'), _defineProperty(_ref, FILTER_NOT_EQUAL, 'Not Equal'), _defineProperty(_ref, FILTER_EMPTY, 'Empty'), _defineProperty(_ref, FILTER_NOT_EMPTY, 'Not Empty'), _defineProperty(_ref, FILTER_CONTAINS, 'Contains'), _defineProperty(_ref, FILTER_NOT_CONTAINS, 'Not Contains'), _defineProperty(_ref, FILTER_STARTS_WITH, 'Starts With'), _defineProperty(_ref, FILTER_ENDS_WITH, 'Ends With'), _defineProperty(_ref, FILTER_IN, 'In'), _defineProperty(_ref, FILTER_NOT_IN, 'Not In'), _ref;
        }

        /**
         * @inheritDoc
         */

    }, {
        key: 'doRenderValueInput',
        value: function doRenderValueInput(value, _onChange) {
            return _react2.default.createElement('input', { value: value, onChange: function onChange(e) {
                    return _onChange(e.target.value);
                } });
        }
    }]);

    return StringType;
}(_AbstractType3.default);

StringType.defaultOperator = FILTER_EQUAL;
exports.default = StringType;
//# sourceMappingURL=StringType.js.map