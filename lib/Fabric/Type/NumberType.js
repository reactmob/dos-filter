'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('office-ui-fabric-react/lib/TextField');

var _NumberType = require('../../Type/NumberType');

var _NumberType2 = _interopRequireDefault(_NumberType);

var _AbstractRenderer = require('./AbstractRenderer');

var _AbstractRenderer2 = _interopRequireDefault(_AbstractRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberType = function (_BaseNumberType) {
    _inherits(NumberType, _BaseNumberType);

    function NumberType() {
        _classCallCheck(this, NumberType);

        return _possibleConstructorReturn(this, (NumberType.__proto__ || Object.getPrototypeOf(NumberType)).apply(this, arguments));
    }

    _createClass(NumberType, [{
        key: 'doRenderValueInput',


        /**
         * @inheritDoc
         */
        value: function doRenderValueInput(value, onChange) {
            return _react2.default.createElement(_TextField.TextField, { type: 'number', value: value, onChanged: function onChanged(val) {
                    return onChange(val);
                } });
        }
    }]);

    return NumberType;
}(_NumberType2.default);

NumberType.defaultProps = {
    doRenderOperatorList: _AbstractRenderer2.default.doRenderOperatorList({ width: 140 })
};
exports.default = NumberType;
//# sourceMappingURL=NumberType.js.map