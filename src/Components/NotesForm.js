import React, { useState } from "react";
import { useParams } from "react-router-dom";
const NotesForm = ({ destinations, setDestinations }) => {
  const params = useParams()
  const [formData, setFormData] = useState({ overall_rating: "", safety_rating: "", food_rating: "", must_do: "", additional_notes: "" })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    fetch(`http://localhost:9292/destinations/${params.destination_id}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
  }

  return (
    <div className="NotesForm">
      <form onSubmit={handleSubmit}>
        <label>Overall Rating:</label>
        <input type="number" id="overall_rating" onChange={handleChange} value={formData.overall_rating}></input>
        <br />
        <label>Safety Rating:</label>
        <input type="number" id="safety_rating" onChange={handleChange} value={formData.safety_rating}></input>
        <br />
        <label>Food Rating:</label>
        <input type="number" id="food_rating" onChange={handleChange} value={formData.food_rating}></input>
        <br />
        <label>Must Do:</label>
        <input type="text" id="must_do" onChange={handleChange} value={formData.must_do}></input>
        <br />
        <label>More:</label>
        <input type="text" id="additional_notes" onChange={handleChange} value={formData.additional_notes}></input>
        <br />
        <input type="submit"></input>
      </form>
    </div>
  )
};

export default NotesForm;