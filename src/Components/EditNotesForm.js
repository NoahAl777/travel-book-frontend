import React, { useState } from "react";

const EditNotesForm = ({ selectedNote }) => {
  const { id, overall_rating, safety_rating, food_rating, must_do, additional_notes } = selectedNote
  const [formData, setFormData] = useState({ overall_rating: overall_rating, safety_rating: safety_rating, food_rating: food_rating, must_do: must_do, additional_notes: additional_notes })
  console.log(formData)
  return (
    <div className="EditNotesForm">
      Edit Notes Form Component
    </div>
  )
};

export default EditNotesForm;