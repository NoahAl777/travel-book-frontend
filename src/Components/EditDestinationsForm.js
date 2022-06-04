import React from "react";

const EditDestinationsForm = ({ selectedDestination }) => {
  const { country, state_province, city, zipcode, image } = selectedDestination

  return (
    <div className="EditDestinationsForm">
      Edit Destinations Form Component
    </div>
  )
};

export default EditDestinationsForm;