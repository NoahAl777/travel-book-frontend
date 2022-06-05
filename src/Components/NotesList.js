import React from "react";
import { Link } from "react-router-dom";

const NotesList = ({ notes }) => {
  const noteCards = notes.map(note => {
    console.log(note)
    return (
      <div className="noteCard" key={note.id}>
        <h4>{`🙌${note.overall_rating} - Overall | 🥧${note.food_rating} - Food | 👮‍♂️${note.safety_rating} - Safety`}</h4>
        <p>Must do: {`${note.must_do}`}</p>
        <p>More: {`${note.additional_notes}`}</p>
        <Link to={`/destinations/${note.destination_id}/notes/${note.id}/edit`}>
          <button>Edit Note</button>
        </Link>
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