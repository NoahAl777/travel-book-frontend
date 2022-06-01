import React, { useState } from "react";

const DestinationForm = () => {
  const [formData, setFormData] = useState({ country: "", state_province: "", city: "", zipcode: "", image: "" })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
  }
  console.log(formData)
  return (
    <div className="DestinationForm">
      <form onSubmit={handleSubmit}>
        <label>Country:</label>
        <input type="text" id="country" onChange={handleChange}></input>
        <br />
        <label>City:</label>
        <input type="text" id="city" onChange={handleChange}></input>
        <br />
        <label>State/Province:</label>
        <input type="text" id="state_province" onChange={handleChange}></input>
        <br />
        <label>Zipcode:</label>
        <input type="integer" id="zipcode" onChange={handleChange}></input>
        <br />
        <label>Image URL:</label>
        <input type="text" id="image" onChange={handleChange}></input>
        <br />
        <input type="submit"></input>
      </form>
    </div>
  )
};

export default DestinationForm;