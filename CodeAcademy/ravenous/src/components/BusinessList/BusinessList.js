import React, { Component } from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends Component {


  render() {
    return (
      <div className="BusinessList">
      {this.props.businesses.map((business, i) => {
        return <Business key={business.name + i} data={business} />
      })}
  </div>
    )
  }
};

export default BusinessList;
