import React from "react";

const DestinationForm = () => {

  return (
    <div className="DestinationForm">
      <form>
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