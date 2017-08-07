import 'whatwg-fetch'
import React from 'react';
import PropTypes from 'prop-types';
import withQuery  from 'with-query';

export default class RemoteConfig {
    static propTypes = {
        queryParam: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        fetcher: PropTypes.instanceOf(Promise),
        url: PropTypes.string.isRequired,
        minChar: PropTypes.number,
        parser: PropTypes.func,
        delay: PropTypes.number,
        // remote filter
        filter: PropTypes.bool,
    };

    static defaultProps = {
        minChar: 3,
        delay: 500,
        filter: false,
        parser: data => data,
        queryParam: value => ({ keyword: value }),
    };

    cached = [];

    constructor(props) {
        PropTypes.checkPropTypes(RemoteConfig.propTypes, props, 'property', 'RemoteConfig');

        for (let key in RemoteConfig.defaultProps) {
            this[key] = RemoteConfig.defaultProps[key];
        }

        for (let key in props) {
            this[key] = props[key];
        }
    }

    fetcher(value) {
        if (this.cached.length && !this['filter']) {
            return Promise.resolve(this.cached);
        }

        return fetch(withQuery(this['url'], this['queryParam'](value)))
            .then(response => response.json())
            .then(json => {
                return this.cached = this['parser'](json);
            })
    }

    fetch(value) {
        return this.fetcher(value)
    }

    static create(props) {
        return new RemoteConfig(props);
    }
}
