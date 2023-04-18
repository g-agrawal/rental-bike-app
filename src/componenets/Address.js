import React, { useState } from 'react';
import { AsyncTypeahead, Menu, MenuItem} from 'react-bootstrap-typeahead';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
import './style.css';
import axios from 'axios'
import configData from '../config/config.json'

const SEARCH_URI = configData.ADDRESS_SERVER_URI;
const Address = (props) => {
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

  const filterBy = () => true;

  return (
    <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      isLoading={isLoading}
      labelKey={option => `${option.name} ${option.completeAddress}`}
      minLength={1}
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
        console.log('selected', selected);
        props.selectAddress(selected[0]);
      }}
    />
  );
};

export default Address;