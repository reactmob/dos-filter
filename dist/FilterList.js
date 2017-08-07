'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FilterList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = require('immutable');

var _throttleDebounce = require('throttle-debounce');

var _FilterItem = require('./FilterItem');

var _Filter = require('./Filter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var emptyFilter = new _immutable.OrderedMap();

var FilterList = exports.FilterList = function (_React$Component) {
    _inherits(FilterList, _React$Component);

    function FilterList(props) {
        _classCallCheck(this, FilterList);

        var _this = _possibleConstructorReturn(this, (FilterList.__proto__ || Object.getPrototypeOf(FilterList)).call(this, props));

        _this.nextId = 0;

        _this.submit = function (e) {
            if (_this.props.onSubmit) {
                return _this.props.onSubmit(_this.getFilters(), _this);
            }
        };

        _this.addFilter = function () {
            var filter = _this.props.fields.first();

            _this.setState({
                filters: _this.state.filters.set(++_this.nextId, _this.cloneFilter(filter))
            });
        };

        _this.removeFilter = function (filterId) {
            _this.setState({
                filters: _this.state.filters.delete(filterId)
            });
        };

        _this.clearFilters = function () {
            _this.setState({
                filters: emptyFilter
            });
        };

        _this.onFieldChange = function (filterId, name) {
            var filter = _this.props.fields.find(function (f) {
                return f.name === name;
            });

            _this.setState({
                filters: _this.state.filters.set(filterId, _this.cloneFilter(filter))
            });
        };

        _this.onValueChange = function (filterId, value) {
            _this.updateFilter(filterId, 'value', value);
        };

        _this.onOperatorChange = function (filterId, operator) {
            _this.updateFilter(filterId, 'operator', operator);
        };

        _this.doRenderFilterItem = function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                filterId = _ref2[0],
                filter = _ref2[1];

            var _this$props = _this.props,
                fields = _this$props.fields,
                removeLabel = _this$props.removeLabel;


            return _react2.default.createElement(_FilterItem.FilterItem, {
                key: filterId,
                filter: filter,
                fields: fields,
                removeLabel: removeLabel,
                onRemoveClick: function onRemoveClick() {
                    return _this.removeFilter(filterId);
                },
                onFieldChange: function onFieldChange(name) {
                    return _this.onFieldChange(filterId, name);
                },
                onValueChange: function onValueChange(value) {
                    return _this.onValueChange(filterId, value);
                },
                onOperatorChange: function onOperatorChange(operator) {
                    return _this.onOperatorChange(filterId, operator);
                }
            });
        };

        if (props.doRenderFilterButtons) {
            _this.doRenderFilterButtons = props.doRenderFilterButtons.bind(_this);
        }

        // delayed usefull when interact with server side
        // it prevents too many request to server.
        _this.onChangeDebounced = (0, _throttleDebounce.debounce)(props.valueChangeDelay, false, props.onChange);

        _this.state = {
            filters: emptyFilter
        };
        return _this;
    }

    _createClass(FilterList, [{
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            if (this.props.onChange && this.nextId) {
                // should trigg only when `onValueChange` & `onOperatorChange` ?
                this.onChangeDebounced(nextState.filters.toList().toJS(), this);
            }
        }
    }, {
        key: 'cloneFilter',
        value: function cloneFilter(filter) {
            return _Filter.Filter.create(_extends({}, filter));
        }
    }, {
        key: 'getFilters',
        value: function getFilters() {
            return this.state.filters.toList().toJS();
        }
    }, {
        key: 'updateFilter',
        value: function updateFilter(filterId, field, value) {
            var filter = this.findById(filterId);
            filter[field] = value;

            this.setState({
                filters: this.state.filters.set(filterId, filter)
            });
        }
    }, {
        key: 'findById',
        value: function findById(filterId) {
            return this.state.filters.get(filterId);
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty() {
            return this.state.filters.isEmpty();
        }
    }, {
        key: 'doRenderList',
        value: function doRenderList() {
            if (this.isEmpty()) {
                return null;
            }

            var filters = this.state.filters;


            return _react2.default.createElement(
                'ul',
                { className: 'dos-filter__list' },
                filters.entrySeq().map(this.doRenderFilterItem)
            );
        }
    }, {
        key: 'doRenderFilterButtons',
        value: function doRenderFilterButtons(filterList) {
            var _filterList$props = filterList.props,
                addLabel = _filterList$props.addLabel,
                clearLabel = _filterList$props.clearLabel,
                submitLabel = _filterList$props.submitLabel;


            return _react2.default.createElement(
                'div',
                { className: 'dos-filter-panel__footer--buttons' },
                _react2.default.createElement(
                    'button',
                    { onClick: filterList.addFilter },
                    addLabel
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: filterList.clearFilters, disabled: filterList.isEmpty() },
                    clearLabel
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: filterList.submit, disabled: filterList.isEmpty() },
                    submitLabel
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var filterButtons = this.doRenderFilterButtons(this);

            return _react2.default.createElement(
                'div',
                { className: 'dos-filter-panel' },
                _react2.default.createElement(
                    'div',
                    { className: 'dos-filter-panel__body' },
                    this.doRenderList()
                ),
                filterButtons && _react2.default.createElement(
                    'div',
                    { className: 'dos-filter-panel__footer' },
                    filterButtons
                )
            );
        }
    }]);

    return FilterList;
}(_react2.default.Component);

FilterList.propTypes = {
    fields: _propTypes2.default.instanceOf(_immutable.Set).isRequired,
    onChange: _propTypes2.default.func,
    onSubmit: _propTypes2.default.func,
    valueChangeDelay: _propTypes2.default.number,
    addLabel: _propTypes2.default.string,
    removeLabel: _propTypes2.default.string,
    clearLabel: _propTypes2.default.string,
    submitLabel: _propTypes2.default.string,
    doRenderFilterButtons: _propTypes2.default.func
};
FilterList.defaultProps = {
    valueChangeDelay: 200,
    removeLabel: 'x',
    addLabel: '+ Add filter',
    clearLabel: '- Clear all',
    submitLabel: 'Submit'
};
//# sourceMappingURL=FilterList.js.map