const apiKey = 'urWuIEUo9dhg64kNN5adzJkf2sc_LLtFhjCIMV3m1nc1EtDuuRVQThWiiISxvDnXatQEl0zsqKRQSw3RwBbAwAJMmAxofSc_jeyc-Aq_ptj_WLsHec3TwJNMmhtxXHYx';

const Yelp = {
search: (term, location, sortBy) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
     {headers: {
       Authorization : `Bearer ${apiKey}`
     }})
  .then(response => response.json())
  .then(jsonResponse => {
    if(jsonResponse.businesses) {
      jsonResponse.businesses.map((business, i) => {
        return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.category[0].title,
            rating: business.rating,
            reviewCount: business.review_count
            }
      });
      }
  });
}
};

export default Yelp;
