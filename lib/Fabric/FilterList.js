'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FilterList = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FilterItem = require('./FilterItem');

var _FilterList = require('../FilterList');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterList = exports.FilterList = function (_BaseFilterList) {
    _inherits(FilterList, _BaseFilterList);

    function FilterList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, FilterList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FilterList.__proto__ || Object.getPrototypeOf(FilterList)).call.apply(_ref, [this].concat(args))), _this), _this.doRenderFilterItem = function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                filterId = _ref3[0],
                filter = _ref3[1];

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
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return FilterList;
}(_FilterList.FilterList);
//# sourceMappingURL=FilterList.js.map