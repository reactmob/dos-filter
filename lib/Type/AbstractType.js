'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractType = function (_React$Component) {
    _inherits(AbstractType, _React$Component);

    function AbstractType(props) {
        _classCallCheck(this, AbstractType);

        var _this = _possibleConstructorReturn(this, (AbstractType.__proto__ || Object.getPrototypeOf(AbstractType)).call(this, props));

        _this.onValueChange = function (val) {
            var value = _this.validate(val);

            _this.setState({ value: value });

            _this.props.onValueChange(value);
        };

        _this.onOperatorChange = function (operator) {
            _this.setState({ operator: operator });
            _this.props.onOperatorChange(operator);
        };

        if (props.doRenderDoubleInput) {
            _this.doRenderDoubleInput = props.doRenderDoubleInput.bind(_this);
        }

        if (props.doRenderValueInput) {
            _this.doRenderValueInput = props.doRenderValueInput.bind(_this);
        }

        if (props.doRenderOperatorList) {
            _this.doRenderOperatorList = props.doRenderOperatorList.bind(_this);
        }

        _this.state = {
            value: props.value,
            operator: props.operator
        };
        return _this;
    }

    _createClass(AbstractType, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.state.value !== nextProps.value) {
                this.setState({ value: nextProps.value });
            }

            if (this.state.operator !== nextProps.operator) {
                this.setState({ operator: nextProps.operator });
            }
        }
    }, {
        key: 'getOperators',


        /**
         * @abstract
         */
        value: function getOperators() {
            return {};
        }

        /**
         * @param {String} operator
         *
         * @return {boolean}
         */

    }, {
        key: 'isSingleValue',
        value: function isSingleValue(operator) {
            return true;
        }

        /**
         * @param value
         *
         * @return {*}
         */

    }, {
        key: 'validate',
        value: function validate(value) {
            return value;
        }

        /**
         * @return {*}
         */

    }, {
        key: 'getValueInput',
        value: function getValueInput() {
            var _this2 = this;

            var value = this.state.value;


            switch (false) {
                case this.isSingleValue(this.state.operator):
                    var _ref = Array.isArray(value) ? value : [value, ''],
                        _ref2 = _slicedToArray(_ref, 2),
                        aValue = _ref2[0],
                        bValue = _ref2[1];

                    return this.doRenderDoubleInput(this.doRenderValueInput(aValue, function (value) {
                        return _this2.onValueChange([value, bValue]);
                    }), this.doRenderValueInput(bValue, function (value) {
                        return _this2.onValueChange([aValue, value]);
                    }));

                default:
                    return this.doRenderValueInput(value, this.onValueChange);
            }
        }

        /**
         * @abstract
         */

    }, {
        key: 'doRenderValueInput',
        value: function doRenderValueInput(value, onChange) {
            return null;
        }

        /**
         * @abstract
         */

    }, {
        key: 'doRenderDoubleInput',
        value: function doRenderDoubleInput(aInput, bInput) {
            return _react2.default.createElement(
                'div',
                { className: 'dos-filter__type--input--double' },
                aInput,
                ' ',
                _react2.default.createElement(
                    'span',
                    null,
                    'and'
                ),
                ' ',
                bInput
            );
        }

        /**
         * @abstract
         */

    }, {
        key: 'doRenderOperatorList',
        value: function doRenderOperatorList(selected, operators, onOperatorChange) {
            return _react2.default.createElement(
                'select',
                { value: selected, onChange: function onChange(e) {
                        return onOperatorChange(e.target.value);
                    } },
                Object.keys(operators).map(function (operator) {
                    return _react2.default.createElement(
                        'option',
                        { key: operator, value: operator },
                        operators[operator]
                    );
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var operator = this.state.operator;

            var operators = this.getOperators();
            var operatorList = this.doRenderOperatorList(operator, operators, this.onOperatorChange);

            return _react2.default.createElement(
                'div',
                { className: 'dos-filter__type' },
                operatorList && _react2.default.createElement(
                    'div',
                    { className: 'dos-filter__type--operator' },
                    operatorList
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'dos-filter__type--input' },
                    this.getValueInput()
                )
            );
        }
    }]);

    return AbstractType;
}(_react2.default.Component);

AbstractType.propTypes = {
    onOperatorChange: _propTypes2.default.func,
    onValueChange: _propTypes2.default.func,
    operator: _propTypes2.default.string,
    doRenderValueInput: _propTypes2.default.func,
    doRenderOperatorList: _propTypes2.default.func,
    doRenderDoubleInput: _propTypes2.default.func
};
AbstractType.defaultProps = {
    value: '',
    onOperatorChange: function onOperatorChange(value) {
        console.warn(value);
    },
    onValueChange: function onValueChange(value) {
        console.warn(value);
    }
};
exports.default = AbstractType;
//# sourceMappingURL=AbstractType.js.map