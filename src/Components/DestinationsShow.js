import React from 'react';
import { useParams } from 'react-router-dom';

const DestinationsShow = () => {
  const params = useParams()
  console.log(params)
  return (
    <div className='DestinationsShow'>

    </div>
  )
};

export default DestinationsShow;