import React, { useState } from "react";

const DestinationForm = ({ destinations, setDestinations }) => {
  const [formData, setFormData] = useState({ country: "", state_province: "", city: "", zipcode: "", image: "" })
  const [errors, setErrors] = useState([])

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    fetch("http://localhost:9292/destinations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(data => handleUpdateDestinationsList(data))
  }

  const handleUpdateDestinationsList = (data) => {
    if (data.errors != undefined) {
      setErrors(data.errors)
    } else {
      setDestinations([...destinations, formData])
      setFormData({ country: "", state_province: "", city: "", zipcode: "", image: "" })
      setErrors()
    }
  }

  return (
    <div className="DestinationForm">
      <h4>{errors}</h4>
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

export default DestinationForm;