'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Filter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Filter = exports.Filter = function () {
    function Filter(props) {
        _classCallCheck(this, Filter);

        _propTypes2.default.checkPropTypes(Filter.propTypes, props, 'property', 'Filter');

        for (var key in props) {
            this[key] = props[key];
        }
    }

    _createClass(Filter, null, [{
        key: 'create',
        value: function create(props) {
            return new Filter(props);
        }
    }]);

    return Filter;
}();

Filter.propTypes = {
    name: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string.isRequired,
    type: _propTypes2.default.func,
    options: _propTypes2.default.object,
    defaultOperator: _propTypes2.default.string,
    defaultValue: _propTypes2.default.any
};
//# sourceMappingURL=Filter.js.map