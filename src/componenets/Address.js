import React, { useState } from 'react';
import { AsyncTypeahead, Menu, MenuItem} from 'react-bootstrap-typeahead';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
import './style.css';
import axios from 'axios'

const SEARCH_URI = 'http://localhost:8081/address/search';
const Address = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const handleSearch = (query) => {
    setIsLoading(true);
    axios.get(`${SEARCH_URI}?text=${query}`)
          .then(res => {
              console.log(res);
              const options = res.data.map((i) => ({
                id: i.id,
                name: i.name,
                completeAddress: i.completeAddress,
                lat: i.latitude,
                lng: i.longitude
              }));
              setOptions(options);
              setIsLoading(false);
          })
          .catch(err => {
              console.log(err);
          });
  };
  const _renderMenu = (results, menuProps) => {
    const items = results.map((result, index) => {
      if (result.divider === true) {
        return <li key={index} role="separator" className="divider"/>;
      }
      if (result.header === true) {
        return <li key={index} className="dropdown-header">{result.name}</li>;
      }
      return (
        <MenuItem key={index} option={result}>
          <strong>{result.name}</strong>
          <div>{result.completeAddress}</div>
        </MenuItem>
      );
    });
    return <Menu {...menuProps}>{items}</Menu>;
  };

  const filterBy = () => true;

  return (
    <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      isLoading={isLoading}
      labelKey={option => `${option.name} ${option.completeAddress}`}
      minLength={2}
      onSearch={handleSearch}
      options={options}
      renderMenu={(results, menuProps) => (
        <Menu {...menuProps}>
          {results.map((result, index) => (
            <MenuItem key={index} option={result} position={index}>
              <div>
                <div>
                  {result.name}
                </div>
                <div>
                  {result.completeAddress}
                </div>
              </div>
              
            </MenuItem>
          ))}
        </Menu>
      )}
      useCache={false}
      placeholder='Enter destination'
      onChange={(selected) => {
        console.log(selected[0]?.lat + ' ' + selected[0]?.lat );
      }}
    />
  );
};

export default Address;