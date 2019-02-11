import React, { Component } from 'react';
import './Business.css';

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

class Business extends Component {
  render() {
    return (
      <div className="Business">
  <div className="image-container">
    <img src={data.imageSrc} alt={data.name} />
  </div>
  <h2>{data.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
    <p>{data.address}</p>
    <p>{data.city}</p>
    <p>{`${data.state} ${data.zipCode}`}</p>
    </div>
    <div className="Business-reviews">
    <h3>{data.category.toUpperCase()}</h3>
    <h3 className="rating">{`${data.rating} stars`}</h3>
    <p>{`${data.reviewCount} reviews`}</p>
    </div>
  </div>
</div>
    )
  }
};


export default Business;
