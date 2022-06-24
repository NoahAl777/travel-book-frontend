import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditDestinationsForm = ({ selectedDestination, destinations, setDestinations }) => {
  const params = useParams()
  const navigate = useNavigate()
  const { id, country, state_province, city, zipcode, image } = selectedDestination
  const [formData, setFormData] = useState({ country: country, state_province: state_province, city: city, zipcode: zipcode, image: image })
  const [errors, setErrors] = useState([])

  useEffect(() => {
    if (selectedDestination == false) {
      fetch(`http://localhost:9292/destinations/${params.destination_id}`)
        .then(r => r.json())
        .then(data => {
          const { country, state_province, city, zipcode, image } = data
          setFormData({ country: country, state_province: state_province, city: city, zipcode: zipcode, image: image })
        })
    }
  }, [])

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:9292/destinations/${params.destination_id}`, {
      method: "PATCH",
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
      setDestinations(destinations.map(destination => {
        if (destination.id == data.id) {
          return data
        } else {
          return destination
        }
      }))
      setErrors()
      navigate("/")
    }
  }

  return (
    <>
      <h2>Edit Destination</h2>
      <div className="EditDestinationsForm">
        <h4 style={{ color: 'red' }}>{errors}</h4>
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
    </>
  )
};

export default EditDestinationsForm;