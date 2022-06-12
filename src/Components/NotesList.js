import React, { useState } from "react";
import { Link } from "react-router-dom";

const NotesList = ({ notes, setNotes, setSelectedNote }) => {

  const handleClick = (note) => {
    setSelectedNote(note)
  }

  const handleDelete = (note) => {
    fetch(`http://localhost:9292/notes/${note.id}`, {
      method: "DELETE"
    })
      .then(handleUpdateDestinationsList(note))
  }

  const handleUpdateDestinationsList = (note) => {
    setNotes(notes.filter((n) => n != note))
  }

  const noteCards = notes.map(note => {
    return (
      <div className="noteCard" key={note.id}>
        <h4>{`🙌${note.overall_rating} - Overall | 🥧${note.food_rating} - Food | 👮‍♂️${note.safety_rating} - Safety`}</h4>
        <p>Must do: {`${note.must_do}`}</p>
        <p>More: {`${note.additional_notes}`}</p>
        <Link to={`/destinations/${note.destination_id}/notes/${note.id}/edit`}>
          <button onClick={() => handleClick(note)}>Edit Note</button>
        </Link>
        <button onClick={() => handleDelete(note)}>Delete</button>
      </div>
    )
  })

  return (
    <div className="NotesList">
      <h3>Important Notes</h3>
      {noteCards}
    </div>
  )
};

export default NotesList;