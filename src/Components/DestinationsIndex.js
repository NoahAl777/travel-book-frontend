import React from 'react';
import { Link } from 'react-router-dom';

const DestinationsIndex = ({ destinations }) => {

  const destinationsToDisplay = destinations.map(destination => {
    return (
      <div className='DestinationCard' key={destination.id}>
        <Link to={`/destinations/${destination.id}`}>
          <img src={`${destination.image}`} width="200" height="150"></img>
          <p>{`${destination.city}, ${destination.country} - ${destination.state_province}  (${destination.zipcode})`}</p>
        </Link>
        <br />
      </div>)
  })

  return (
    <div className='DestinationsIndex'>
      {destinationsToDisplay}
    </div>
  )
};

export default DestinationsIndex;