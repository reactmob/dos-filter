'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAutocomplete = require('react-autocomplete');

var _reactAutocomplete2 = _interopRequireDefault(_reactAutocomplete);

var _throttleDebounce = require('throttle-debounce');

var _AbstractType2 = require('./AbstractType');

var _AbstractType3 = _interopRequireDefault(_AbstractType2);

var _RemoteConfig = require('./SelectType/RemoteConfig');

var _RemoteConfig2 = _interopRequireDefault(_RemoteConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FILTER_EQUAL = 'EQUAL';
var FILTER_NOT_EQUAL = 'NOT_EQUAL';
var FILTER_IN = 'IN';
var FILTER_NOT_IN = 'NOT_IN';

var SelectType = function (_AbstractType) {
    _inherits(SelectType, _AbstractType);

    function SelectType(props) {
        _classCallCheck(this, SelectType);

        var _this = _possibleConstructorReturn(this, (SelectType.__proto__ || Object.getPrototypeOf(SelectType)).call(this, props));

        _this.items = [];
        _this.remote = undefined;

        _this.renderItem = function (item) {
            return _react2.default.createElement(
                'div',
                { key: _this.getFieldValue(item) },
                _this.getFieldLabel(item)
            );
        };

        _this.matchStateToTerm = function (item, value) {
            return _this.getFieldLabel(item).toLowerCase().indexOf(value.toLowerCase()) !== -1;
        };

        _this.getFieldValue = function (item) {
            var valueField = _this.props.valueField;


            if (typeof valueField === 'function') {
                return valueField(item);
            }

            return item[valueField];
        };

        _this.getFieldLabel = function (item) {
            var displayField = _this.props.displayField;


            if (typeof displayField === 'function') {
                return displayField(item);
            }

            return item[displayField];
        };

        _this.isRemoteFilter = function (value) {
            return _this.remote && _this.remote.filter && _this.remote.minChar <= value.length;
        };

        _this.isNotCorrectValue = function (value) {
            var items = _this.state.items;


            return value && !items.filter(function (item) {
                return _this.getFieldLabel(item) === value;
            }).length;
        };

        _this.remote = props.remote;
        _this.items = props.items;

        if (props.items instanceof _RemoteConfig2.default) {
            _this.remote = props.items;
            _this.items = [];
        }

        _this.state = {
            value: props.value,
            operator: props.operator,
            items: _this.items,
            disabled: false
        };

        if (_this.remote) {
            _this.fetchRemote = (0, _throttleDebounce.debounce)(_this.remote.delay, false, function (value) {
                _this.setState({ disabled: true });

                _this.remote.fetch(value).then(function (data) {
                    _this.setState({ disabled: false, items: data });
                });
            });
        }
        return _this;
    }

    _createClass(SelectType, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.fetchRemote();
        }

        /**
         * @inheritDoc
         */

    }, {
        key: 'getOperators',
        value: function getOperators() {
            var _ref;

            return _ref = {}, _defineProperty(_ref, FILTER_EQUAL, 'Equal'), _defineProperty(_ref, FILTER_NOT_EQUAL, 'Not Equal'), _defineProperty(_ref, FILTER_IN, 'In'), _defineProperty(_ref, FILTER_NOT_IN, 'Not In'), _ref;
        }
    }, {
        key: 'doRenderValueInput',


        /**
         * @inheritDoc
         */
        value: function doRenderValueInput(value, onChange) {
            var _this2 = this;

            var listProps = this.props.listProps;
            var _state = this.state,
                items = _state.items,
                disabled = _state.disabled;


            return _react2.default.createElement(_reactAutocomplete2.default, _extends({
                items: items,
                value: value,
                getItemValue: this.getFieldLabel,
                renderItem: this.renderItem,
                shouldItemRender: this.remote ? undefined : this.matchStateToTerm,

                onChange: function onChange(e, value) {
                    _this2.setState({ value: value });

                    if (_this2.isRemoteFilter(value)) {
                        _this2.fetchRemote(value);
                    }
                },

                onSelect: function onSelect(value, item) {
                    // filter value
                    onChange(_this2.getFieldValue(item));

                    // textfield value
                    _this2.setState({ value: value });
                },

                inputProps: {
                    disabled: disabled,
                    onBlur: function onBlur(e) {
                        if (_this2.isNotCorrectValue(e.target.value)) {
                            _this2.setState({ value: '' });
                        }
                    }
                }

            }, listProps));
        }
    }]);

    return SelectType;
}(_AbstractType3.default);

SelectType.defaultOperator = FILTER_EQUAL;
SelectType.propTypes = {
    displayField: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    valueField: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    remote: _propTypes2.default.instanceOf(_RemoteConfig2.default),
    listProps: _propTypes2.default.object,
    items: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_RemoteConfig2.default), _propTypes2.default.arrayOf(_propTypes2.default.object)]).isRequired
};
SelectType.defaultProps = {
    valueField: 'id',
    displayField: 'label'
};
exports.default = SelectType;
//# sourceMappingURL=SelectType.js.map