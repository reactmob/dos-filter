'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dropdown = require('office-ui-fabric-react/lib/Dropdown');

var _ExistsType = require('../../Type/ExistsType');

var _ExistsType2 = _interopRequireDefault(_ExistsType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExistsType = function (_BaseExistsType) {
    _inherits(ExistsType, _BaseExistsType);

    function ExistsType() {
        _classCallCheck(this, ExistsType);

        return _possibleConstructorReturn(this, (ExistsType.__proto__ || Object.getPrototypeOf(ExistsType)).apply(this, arguments));
    }

    _createClass(ExistsType, [{
        key: 'doRenderValueInput',

        /**
         * @inheritDoc
         */
        value: function doRenderValueInput(val, onChange) {
            var choice = this.props.choice;

            var options = [{ key: choice.yesValue, text: choice.yesLabel }, { key: choice.noValue, text: choice.noLabel }];

            return _react2.default.createElement(_Dropdown.Dropdown, {
                style: { width: 100 },
                defaultSelectedKey: val,
                options: options,
                onChanged: function onChanged(item) {
                    return onChange(item.key);
                }
            });
        }
    }]);

    return ExistsType;
}(_ExistsType2.default);

exports.default = ExistsType;
//# sourceMappingURL=ExistsType.js.map