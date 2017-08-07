import PropTypes from 'prop-types';

export class Filter {
    static propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.func,
        options: PropTypes.object,
        defaultOperator: PropTypes.string,
        defaultValue: PropTypes.any,
    };

    constructor(props) {
        PropTypes.checkPropTypes(Filter.propTypes, props, 'property', 'Filter');

        for (let key in props) {
            this[key] = props[key];
        }
    }

    static create(props) {
        return new Filter(props);
    }
}
