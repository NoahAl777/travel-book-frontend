import React, { useState } from "react";

const EditDestinationsForm = ({ selectedDestination }) => {
  const { country, state_province, city, zipcode, image } = selectedDestination
  const [formData, setFormData] = useState({ country: country, state_province: state_province, city: city, zipcode: zipcode, image: image })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div className="EditDestinationsForm">
      <form onSubmit={handleSubmit}>
        <label>Country:</label>
        <input type="text" id="country" onChange={handleChange} value={formData.country}></input>
        <br />
        <label>City:</label>
        <input type="text" id="city" onChange={handleChange} value={formData.city}></input>
        <br />
        <label>State/Province:</label>
        <input type="text" id="state_province" onChange={handleChange} value={formData.state_province}></input>
        <br />
        <label>Zipcode:</label>
        <input type="integer" id="zipcode" onChange={handleChange} value={formData.zipcode}></input>
        <br />
        <label>Image URL:</label>
        <input type="text" id="image" onChange={handleChange} value={formData.image}></input>
        <br />
        <input type="submit"></input>
      </form>
    </div>
  )
};

export default EditDestinationsForm;