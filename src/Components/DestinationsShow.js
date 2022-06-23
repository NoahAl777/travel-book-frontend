import React from 'react';
import { useParams } from 'react-router-dom';

const DestinationsShow = ({ destinations }) => {
  const params = useParams()
  const destinationToDisplay = destinations.filter(destination => destination.id == params.id)
  const { country, state_province, city, zipcode, created_at, image, notes } = destinationToDisplay[0]
  console.log(country)
  return (
    <div className='DestinationsShow'>

    </div>
  )
};

export default DestinationsShow;