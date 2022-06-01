import React, { useState } from "react";

const DestinationForm = () => {
  const [formData, setFormData] = useState({ country: "", state_province: "", city: "", zipcode: "", image: "" })
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
  }

  return (
    <div className="DestinationForm">
      <form onSubmit={handleSubmit}>
        <label>Country:</label>
        <input type="text" id="country"></input>
        <br />
        <label>City:</label>
        <input type="text" id="city"></input>
        <br />
        <label>State/Province:</label>
        <input type="text" id="state_province"></input>
        <br />
        <label>Zipcode:</label>
        <input type="integer" id="zipcode"></input>
        <br />
        <label>Image URL:</label>
        <input type="text" id="image"></input>
        <br />
        <input type="submit"></input>
      </form>
    </div>
  )
};

export default DestinationForm;