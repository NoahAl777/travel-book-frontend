import React from "react";

const DestinationForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
  }

  return (
    <div className="DestinationForm">
      <form onSubmit={handleSubmit}>
        <label>Country:</label>
        <input type="text" id=""></input>
        <br />
        <label>City:</label>
        <input type="text" id=""></input>
        <br />
        <label>State/Province:</label>
        <input type="text" id=""></input>
        <br />
        <label>Zipcode:</label>
        <input type="integer" id=""></input>
        <br />
        <label>Image URL:</label>
        <input type="text" id=""></input>
        <br />
        <input type="submit"></input>
      </form>
    </div>
  )
};

export default DestinationForm;