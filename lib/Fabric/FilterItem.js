'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FilterItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dropdown = require('office-ui-fabric-react/lib/Dropdown');

var _Button = require('office-ui-fabric-react/lib/Button');

var _FilterItem = require('../FilterItem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterItem = exports.FilterItem = function (_BaseFilterItem) {
    _inherits(FilterItem, _BaseFilterItem);

    function FilterItem() {
        _classCallCheck(this, FilterItem);

        return _possibleConstructorReturn(this, (FilterItem.__proto__ || Object.getPrototypeOf(FilterItem)).apply(this, arguments));
    }

    _createClass(FilterItem, [{
        key: 'doRenderFields',
        value: function doRenderFields() {
            var _props = this.props,
                fields = _props.fields,
                onFieldChange = _props.onFieldChange,
                filter = _props.filter;

            var options = fields.map(function (_ref) {
                var name = _ref.name,
                    label = _ref.label;

                return { key: name, text: label };
            }).toJS();

            return _react2.default.createElement(_Dropdown.Dropdown, {
                style: { width: 200 },
                defaultSelectedKey: filter.name,
                onChanged: function onChanged(item) {
                    return onFieldChange(item.key);
                },
                options: options
            });
        }
    }, {
        key: 'doRenderRemoveFilter',
        value: function doRenderRemoveFilter(onRemoveClick, removeLabel) {
            return _react2.default.createElement(_Button.CommandButton, { onClick: onRemoveClick, title: removeLabel, iconProps: { iconName: 'Trash' } });
        }
    }]);

    return FilterItem;
}(_FilterItem.FilterItem);
//# sourceMappingURL=FilterItem.js.map