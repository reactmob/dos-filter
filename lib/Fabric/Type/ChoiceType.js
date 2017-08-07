'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dropdown = require('office-ui-fabric-react/lib/Dropdown');

var _ChoiceType = require('../../Type/ChoiceType');

var _ChoiceType2 = _interopRequireDefault(_ChoiceType);

var _AbstractRenderer = require('./AbstractRenderer');

var _AbstractRenderer2 = _interopRequireDefault(_AbstractRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChoiceType = function (_BaseChoiceType) {
    _inherits(ChoiceType, _BaseChoiceType);

    function ChoiceType() {
        _classCallCheck(this, ChoiceType);

        return _possibleConstructorReturn(this, (ChoiceType.__proto__ || Object.getPrototypeOf(ChoiceType)).apply(this, arguments));
    }

    _createClass(ChoiceType, [{
        key: 'doRenderValueInput',


        /**
         * @inheritDoc
         */
        value: function doRenderValueInput(val, onChange) {
            var _this2 = this;

            var listProps = this.props.listProps;
            var _state = this.state,
                items = _state.items,
                disabled = _state.disabled;

            var options = items.map(function (item) {
                return { key: _this2.getFieldValue(item), text: _this2.getFieldLabel(item) };
            });

            return _react2.default.createElement(_Dropdown.Dropdown, _extends({
                style: { width: 200 },
                disabled: disabled,
                defaultSelectedKey: val,
                options: options,
                onChanged: function onChanged(item) {
                    return onChange(item.key);
                }

            }, listProps));
        }
    }]);

    return ChoiceType;
}(_ChoiceType2.default);

ChoiceType.defaultProps = {
    doRenderOperatorList: _AbstractRenderer2.default.doRenderOperatorList()
};
exports.default = ChoiceType;
//# sourceMappingURL=ChoiceType.js.map