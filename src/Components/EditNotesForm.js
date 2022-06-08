import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditNotesForm = ({ selectedNote }) => {
  const params = useParams();
  const { id, overall_rating, safety_rating, food_rating, must_do, additional_notes, destination_id } = selectedNote;
  const [formData, setFormData] = useState({ overall_rating: overall_rating, safety_rating: safety_rating, food_rating: food_rating, must_do: must_do, additional_notes: additional_notes });

  useEffect(() => {
    if (selectedNote == false) {
      fetch(`http://localhost:9292/notes/${params.note_id}`)
        .then(r => r.json())
        .then(data => {
          const { overall_rating, safety_rating, food_rating, must_do, additional_notes } = data
          setFormData({ overall_rating: overall_rating, safety_rating: safety_rating, food_rating: food_rating, must_do: must_do, additional_notes: additional_notes })
        })
    }
  }, [])

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:9292/notes/${params.note_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
  }

  return (
    <div className="EditNotesForm">
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

export default EditNotesForm;