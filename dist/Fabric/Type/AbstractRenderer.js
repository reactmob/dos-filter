'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dropdown = require('office-ui-fabric-react/lib/Dropdown');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractRenderer = function () {
    function AbstractRenderer() {
        _classCallCheck(this, AbstractRenderer);
    }

    _createClass(AbstractRenderer, null, [{
        key: 'doRenderOperatorList',
        value: function doRenderOperatorList() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref$width = _ref.width,
                width = _ref$width === undefined ? 120 : _ref$width;

            return function (selected, operators, onOperatorChange) {
                var options = Object.keys(operators).map(function (operator) {
                    return { key: operator, text: operators[operator] };
                });

                return _react2.default.createElement(_Dropdown.Dropdown, {
                    style: { width: width },
                    defaultSelectedKey: selected,
                    onChanged: function onChanged(item) {
                        return onOperatorChange(item.key);
                    },
                    options: options
                });
            };
        }
    }]);

    return AbstractRenderer;
}();

exports.default = AbstractRenderer;
//# sourceMappingURL=AbstractRenderer.js.map