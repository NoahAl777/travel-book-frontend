import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditDestinationsForm = ({ destinations }) => {
  const params = useParams()
  const [selectedDestination, setSelectedDestination] = useState({})

  useEffect(() => {
    setSelectedDestination(destinations.filter((destination) => destination.id == params.destination_id))
  }, [])
  console.log(selectedDestination)

  return (
    <div className="EditDestinationsForm">
      Edit Destinations Form Component
    </div>
  )
};

export default EditDestinationsForm;