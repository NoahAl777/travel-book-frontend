import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const NotesForm = ({ destinations, setDestinations, notes, setNotes }) => {
  const params = useParams()
  const navigate = useNavigate()
  const [errors, setErrors] = useState()
  const [formData, setFormData] = useState({ overall_rating: "", safety_rating: "", food_rating: "", must_do: "", additional_notes: "" })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:9292/destinations/${params.destination_id}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(data => checkForErrors(data))
  }

  const checkForErrors = (data) => {
    if (data.errors != undefined) {
      setErrors(data.errors)
    } else {
      handleUpdateNotesList(data)
    }
  }

  const handleUpdateNotesList = (data) => {
    let newNote = { ...formData, destination_id: parseInt(params.destination_id), id: data.id }
    setNotes([...notes, newNote])
    setErrors()
    setFormData({ overall_rating: "", safety_rating: "", food_rating: "", must_do: "", additional_notes: "" })
    navigate('/')
  }

  return (
    <>
      <h2>Create New Note</h2>
      <div className="NotesForm">
        <h4 style={{ color: 'red' }}>{errors}</h4>
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
          <label>Additional Notes:</label>
          <input type="text" id="additional_notes" onChange={handleChange} value={formData.additional_notes}></input>
          <br />
          <input type="submit"></input>
        </form>
      </div>
    </>
  )
};

export default NotesForm;