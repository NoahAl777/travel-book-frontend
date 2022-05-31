import React from "react";

const NotesList = ({ notes }) => {
  console.log(notes)
  const noteCards = notes.map(note => {
    return (
      <div className="noteCard">
        <h4>{`🙌${note.overall_rating} - Overall | 🥧${note.food_rating} - Food | 👮‍♂️${note.safety_rating} - Safety`}</h4>
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