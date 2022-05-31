import React from "react";

const NotesList = ({ notes }) => {
  console.log(notes)
  const noteCards = notes.map(note => {
    return (
      <div className="noteCard" key={note.id}>
        <h4>{`🙌${note.overall_rating} - Overall | 🥧${note.food_rating} - Food | 👮‍♂️${note.safety_rating} - Safety`}</h4>
        <p>Must do: {`${note.must_do}`}</p>
        <p>More: {`${note.additional_notes}`}</p>
      </div>
    )
  })

  return (
    <div className="NotesList">
      <h3>NotesList Component</h3>
      {noteCards}
    </div>
  )
};

export default NotesList;