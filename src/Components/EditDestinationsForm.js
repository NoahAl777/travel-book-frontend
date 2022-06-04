import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditDestinationsForm = ({ destinations }) => {
  const params = useParams()
  const [selectedDestination, setSelectedDestination] = useState(destinations.filter((destination) => destination.id == params.destination_id))

  console.log(selectedDestination)

  return (
    <div className="EditDestinationsForm">
      <form >
        <label>Country:</label>
        <input type="text" id="country" value={selectedDestination[0].country}></input>
        <br />
        <label>City:</label>
        <input type="text" id="city" value={selectedDestination[0].city}></input>
        <br />
        <label>State/Province:</label>
        <input type="text" id="state_province" value={selectedDestination[0].state_province}></input>
        <br />
        <label>Zipcode:</label>
        <input type="integer" id="zipcode" value={selectedDestination[0].zipcode}></input>
        <br />
        <label>Image URL:</label>
        <input type="text" id="image" value={selectedDestination[0].image}></input>
        <br />
        <input type="submit"></input>
      </form>
    </div>
  )
};

export default EditDestinationsForm;