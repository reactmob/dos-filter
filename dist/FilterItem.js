'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FilterItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = require('immutable');

var _Filter = require('./Filter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterItem = exports.FilterItem = function (_React$Component) {
    _inherits(FilterItem, _React$Component);

    function FilterItem() {
        _classCallCheck(this, FilterItem);

        return _possibleConstructorReturn(this, (FilterItem.__proto__ || Object.getPrototypeOf(FilterItem)).apply(this, arguments));
    }

    _createClass(FilterItem, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            var _props = this.props,
                filter = _props.filter,
                fields = _props.fields;


            return !(0, _immutable.is)(nextProps.filter, filter) || !(0, _immutable.is)(nextProps.fields, fields);
        }
    }, {
        key: 'doRenderFields',
        value: function doRenderFields() {
            var _props2 = this.props,
                fields = _props2.fields,
                onFieldChange = _props2.onFieldChange,
                filter = _props2.filter;


            return _react2.default.createElement(
                'select',
                { value: filter.name, onChange: function onChange(e) {
                        return onFieldChange(e.target.value);
                    } },
                fields.map(function (_ref) {
                    var name = _ref.name,
                        label = _ref.label;

                    return _react2.default.createElement(
                        'option',
                        { key: name, value: name },
                        label
                    );
                })
            );
        }
    }, {
        key: 'doRenderFilter',
        value: function doRenderFilter() {
            var _props3 = this.props,
                filter = _props3.filter,
                onOperatorChange = _props3.onOperatorChange,
                onValueChange = _props3.onValueChange;

            var props = Object.assign({
                operator: filter.operator = filter.defaultOperator || filter.type.defaultOperator,
                value: filter.value = filter.defaultValue,
                onOperatorChange: onOperatorChange,
                onValueChange: onValueChange
            }, filter.options);

            return _react2.default.createElement(filter.type, props);
        }
    }, {
        key: 'doRenderRemoveFilter',
        value: function doRenderRemoveFilter(onRemoveClick, removeLabel) {
            return _react2.default.createElement(
                'button',
                { type: 'button', onClick: onRemoveClick },
                removeLabel
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props4 = this.props,
                onRemoveClick = _props4.onRemoveClick,
                removeLabel = _props4.removeLabel;


            return _react2.default.createElement(
                'li',
                { className: 'dos-filter__item' },
                _react2.default.createElement(
                    'div',
                    { className: 'dos-filter__item--remove' },
                    this.doRenderRemoveFilter(onRemoveClick, removeLabel)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'dos-filter__item--field' },
                    this.doRenderFields()
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'dos-filter__item--filter' },
                    this.doRenderFilter()
                )
            );
        }
    }]);

    return FilterItem;
}(_react2.default.Component);

FilterItem.propTypes = {
    onRemoveClick: _propTypes2.default.func,
    onFieldChange: _propTypes2.default.func,
    fields: _propTypes2.default.instanceOf(_immutable.Set),
    filter: _propTypes2.default.instanceOf(_Filter.Filter),
    removeLabel: _propTypes2.default.string
};
//# sourceMappingURL=FilterItem.js.map