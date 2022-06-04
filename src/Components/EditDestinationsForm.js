import React, { useState } from "react";
import { useParams } from "react-router-dom";

const EditDestinationsForm = ({ destinations }) => {
  const paramas = useParams()
  return (
    <div className="EditDestinationsForm">
      Edit Destinations Form Component
    </div>
  )
};

export default EditDestinationsForm;