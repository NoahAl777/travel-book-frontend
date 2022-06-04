import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditDestinationsForm = ({ destinations }) => {
  const paramas = useParams()
  const [selectedDestination, setSelectedDestination] = useState({})

  return (
    <div className="EditDestinationsForm">
      Edit Destinations Form Component
    </div>
  )
};

export default EditDestinationsForm;