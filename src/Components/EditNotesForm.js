import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditNotesForm = ({ selectedNote, destinations, setDestinations, notes, setNotes }) => {
  const params = useParams();
  const navigate = useNavigate();
  const { id, overall_rating, safety_rating, food_rating, must_do, additional_notes, destination_id } = selectedNote;
  const [formData, setFormData] = useState({ overall_rating: overall_rating, safety_rating: safety_rating, food_rating: food_rating, must_do: must_do, additional_notes: additional_notes });
  const [errors, setErrors] = useState([])

  useEffect(() => {
    if (selectedNote == false) {
      console.log("fetch")
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
    let updatedNote = { ...formData, destination_id: parseInt(params.destination_id), id: data.id }
    let updatedNotesList = []
    setDestinations(destinations.map(d => {
      if (d.id == data.destination_id) {
        updatedNotesList = d.notes.map(note => {
          if (note.id == params.note_id) {
            return updatedNote
          } else {
            return note
          }
        })
        let updatedDestination = { ...d, notes: updatedNotesList }
        return updatedDestination
      } else {
        return d
      }
    }))
    setErrors()
    navigate(`/destinations/${params.destination_id}`)
  }


  return (
    <>
      <h2>Edit Note</h2>
      <div className="EditNotesForm">
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
          <label>More:</label>
          <input type="text" id="additional_notes" onChange={handleChange} value={formData.additional_notes}></input>
          <br />
          <input type="submit"></input>
        </form>
      </div>
    </>
  )
};

export default EditNotesForm;