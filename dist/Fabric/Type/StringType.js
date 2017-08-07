'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('office-ui-fabric-react/lib/TextField');

var _StringType = require('../../Type/StringType');

var _StringType2 = _interopRequireDefault(_StringType);

var _AbstractRenderer = require('./AbstractRenderer');

var _AbstractRenderer2 = _interopRequireDefault(_AbstractRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StringType = function (_BaseStringType) {
    _inherits(StringType, _BaseStringType);

    function StringType() {
        _classCallCheck(this, StringType);

        return _possibleConstructorReturn(this, (StringType.__proto__ || Object.getPrototypeOf(StringType)).apply(this, arguments));
    }

    return StringType;
}(_StringType2.default);

StringType.defaultProps = {
    doRenderOperatorList: _AbstractRenderer2.default.doRenderOperatorList(),

    /**
     * @param {String} value
     * @param {Function} onChange
     *
     * @return {TextField|XML}
     */
    doRenderValueInput: function doRenderValueInput(value, onChange) {
        return _react2.default.createElement(_TextField.TextField, { value: value, onChanged: function onChanged(val) {
                return onChange(val);
            } });
    }
};
exports.default = StringType;
//# sourceMappingURL=StringType.js.map