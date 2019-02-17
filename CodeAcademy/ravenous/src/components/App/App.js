import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

const data = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businesses = [data, data, data, data, data, data];

export default class App extends Component {
  render() {
    console.log(businesses);
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList businesses={businesses}/>
  </div>
  );
  }
};
