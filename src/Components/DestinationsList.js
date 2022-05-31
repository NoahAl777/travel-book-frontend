import React from "react";
import NotesList from "./NotesList";

const DestinationsList = ({ destinations }) => {

  let destinationCards = destinations.map(destination => {
    return (
      <div className="DestinationCard" key={destination.id}>
        <h2>{`${destination.city}, ${destination.country} - ${destination.state_province}`}</h2>
        <img src={`${destination.image}`} width="1200" height="800"></img>
        <NotesList />
      </div>
    )
  })
  return (
    <div className="DestinationsList">
      <h2>DestinationsList Component</h2>
      {destinationCards}
    </div>
  )
};

export default DestinationsList;