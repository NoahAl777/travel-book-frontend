import React from 'react';
import { useParams } from 'react-router-dom';

const DestinationsShow = ({ destinations }) => {
  const params = useParams()
  const destinationToDisplay = destinations.filter(destination => destination.id == params.id)
  console.log(destinationToDisplay)
  return (
    <div className='DestinationsShow'>

    </div>
  )
};

export default DestinationsShow;