'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('whatwg-fetch');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withQuery = require('with-query');

var _withQuery2 = _interopRequireDefault(_withQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RemoteConfig = function () {
    function RemoteConfig(props) {
        _classCallCheck(this, RemoteConfig);

        this.cached = [];

        _propTypes2.default.checkPropTypes(RemoteConfig.propTypes, props, 'property', 'RemoteConfig');

        for (var key in RemoteConfig.defaultProps) {
            this[key] = RemoteConfig.defaultProps[key];
        }

        for (var _key in props) {
            this[_key] = props[_key];
        }
    }

    _createClass(RemoteConfig, [{
        key: 'fetcher',
        value: function fetcher(value) {
            var _this = this;

            if (this.cached.length && !this['filter']) {
                return Promise.resolve(this.cached);
            }

            return fetch((0, _withQuery2.default)(this['url'], this['queryParam'](value))).then(function (response) {
                return response.json();
            }).then(function (json) {
                return _this.cached = _this['parser'](json);
            });
        }
    }, {
        key: 'fetch',
        value: function fetch(value) {
            return this.fetcher(value);
        }
    }], [{
        key: 'create',
        value: function create(props) {
            return new RemoteConfig(props);
        }
    }]);

    return RemoteConfig;
}();

RemoteConfig.propTypes = {
    queryParam: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    fetcher: _propTypes2.default.instanceOf(Promise),
    url: _propTypes2.default.string.isRequired,
    minChar: _propTypes2.default.number,
    parser: _propTypes2.default.func,
    delay: _propTypes2.default.number,
    // remote filter
    filter: _propTypes2.default.bool
};
RemoteConfig.defaultProps = {
    minChar: 3,
    delay: 500,
    filter: false,
    parser: function parser(data) {
        return data;
    },
    queryParam: function queryParam(value) {
        return { keyword: value };
    }
};
exports.default = RemoteConfig;
//# sourceMappingURL=RemoteConfig.js.map