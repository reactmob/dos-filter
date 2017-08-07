import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';
import { Filter, RemoteConfig } from './lib';
import { FilterList, StringType, NumberType, DateType, SelectType, ExistsType } from './lib/Fabric';

const countries = [
    { abbr: 'AL', name: 'Alabama' },
    { abbr: 'AK', name: 'Alaska' },
    { abbr: 'AZ', name: 'Arizona' },
    { abbr: 'AR', name: 'Arkansas' },
    { abbr: 'CA', name: 'California' },
    { abbr: 'CO', name: 'Colorado' },
    { abbr: 'CT', name: 'Connecticut' },
    { abbr: 'DE', name: 'Delaware' },
    { abbr: 'FL', name: 'Florida' },
    { abbr: 'GA', name: 'Georgia' },
    { abbr: 'HI', name: 'Hawaii' },
    { abbr: 'ID', name: 'Idaho' },
    { abbr: 'IL', name: 'Illinois' },
    { abbr: 'IN', name: 'Indiana' },
    { abbr: 'IA', name: 'Iowa' },
    { abbr: 'KS', name: 'Kansas' },
];

const countryOptions = {
    items: countries,
    valueField: 'id',
    displayField: item => `${item['firstName']} ${item['lastName']}`,
    /*items: RemoteConfig.create({
        url: 'http://127.0.0.1:8899/api/v1/customers/',
        parser: (data) => {
            if (data && data['_embedded']) {
                return data['_embedded']['items'];
            } else {
                return data;
            }
        }
    })*/
};

const fields = new Set([
    Filter.create({ name: 'first_name', label: 'First Name', type: StringType }),
    Filter.create({ name: 'birthday', label: 'Birthday', type: DateType }),
    Filter.create({ name: 'age', label: 'Age', type: NumberType }),
    Filter.create({ name: 'country', label: 'Country', type: SelectType, options: countryOptions }),
    Filter.create({ name: 'enabled', label: 'Enabled', type: ExistsType }),
]);

class App extends React.Component {
    render() {
        return (
            <FilterList fields={fields} onChange={(e) => console.log(e)} onSubmit={(filters) => console.log(filters)}/>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));