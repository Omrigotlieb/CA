import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import Yelp from '../../util/Yelp';

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
//
// const businesses = [data, data, data, data, data, data];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [data]
    };
    this.searchYelp = this.searchYelp.bind(this);
  }


  searchYelp(term, location, sortBy){
    console.log('about to serach yelp');
    Yelp.search(term, location, sortBy).then(businesses => {
      console.log('businesses are: ' + businesses);
      this.setState({businesses})
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
  </div>
  );
  }
};
