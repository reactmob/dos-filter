'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExistsChoiceConfig = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AbstractType2 = require('./AbstractType');

var _AbstractType3 = _interopRequireDefault(_AbstractType2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FILTER_EQUAL = 'EQUAL';

var ExistsChoiceConfig = exports.ExistsChoiceConfig = function () {
    function ExistsChoiceConfig() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$yesLabel = _ref.yesLabel,
            yesLabel = _ref$yesLabel === undefined ? 'Yes' : _ref$yesLabel,
            _ref$yesValue = _ref.yesValue,
            yesValue = _ref$yesValue === undefined ? 1 : _ref$yesValue,
            _ref$noLabel = _ref.noLabel,
            noLabel = _ref$noLabel === undefined ? 'No' : _ref$noLabel,
            _ref$noValue = _ref.noValue,
            noValue = _ref$noValue === undefined ? 0 : _ref$noValue;

        _classCallCheck(this, ExistsChoiceConfig);

        this.yesLabel = yesLabel;
        this.yesValue = yesValue;
        this.noLabel = noLabel;
        this.noValue = noValue;
    }

    _createClass(ExistsChoiceConfig, null, [{
        key: 'create',
        value: function create(arg) {
            return new ExistsChoiceConfig(arg);
        }
    }]);

    return ExistsChoiceConfig;
}();

var ExistsType = function (_AbstractType) {
    _inherits(ExistsType, _AbstractType);

    function ExistsType() {
        _classCallCheck(this, ExistsType);

        return _possibleConstructorReturn(this, (ExistsType.__proto__ || Object.getPrototypeOf(ExistsType)).apply(this, arguments));
    }

    _createClass(ExistsType, [{
        key: 'validate',
        value: function validate(value) {
            return parseInt(value);
        }

        // no operator

    }, {
        key: 'doRenderOperatorList',
        value: function doRenderOperatorList() {
            return null;
        }
    }, {
        key: 'doRenderValueInput',
        value: function doRenderValueInput(value, _onChange) {
            var choice = this.props.choice;


            return _react2.default.createElement(
                'select',
                { value: value, onChange: function onChange(e) {
                        return _onChange(e.target.value);
                    } },
                _react2.default.createElement(
                    'option',
                    { key: choice.yesValue, value: choice.yesValue },
                    choice.yesLabel
                ),
                _react2.default.createElement(
                    'option',
                    { key: choice.noValue, value: choice.noValue },
                    choice.noLabel
                )
            );
        }
    }]);

    return ExistsType;
}(_AbstractType3.default);

ExistsType.defaultOperator = FILTER_EQUAL;
ExistsType.propTypes = {
    choice: _propTypes2.default.instanceOf(ExistsChoiceConfig)
};
ExistsType.defaultProps = {
    choice: ExistsChoiceConfig.create()
};
exports.default = ExistsType;
//# sourceMappingURL=ExistsType.js.map