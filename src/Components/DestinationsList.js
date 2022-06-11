import React from "react";
import NotesList from "./NotesList";
import { Link } from "react-router-dom";

const DestinationsList = ({ destinations, setDestinations, setSelectedDestination, setSelectedNote, notes, setNotes }) => {

  const handleSelection = (destination) => {
    setSelectedDestination(destination)
  }

  const handleDelete = (destination) => {
    console.log(destination)
    fetch(`http://localhost:9292/destinations/${destination.id}`, {
      method: "DELETE"
    })
      .then(handleUpdateDestinationsList(destination))
  }

  const handleUpdateDestinationsList = (destination) => {
    setDestinations(destinations.filter((d) => d != destination))
  }

  let destinationCards = destinations.map(destination => {
    return (
      <div className="DestinationCard" key={destination.id}>
        <h2>{`${destination.city}, ${destination.country} - ${destination.state_province}  (${destination.zipcode})`}</h2>
        <img src={`${destination.image}`} width="1200" height="800"></img>
        <br />
        <Link to={`/destinations/${destination.id}/edit`}>
          <button onClick={() => handleSelection(destination)}>Edit Destination</button>
        </Link>
        <button onClick={() => handleDelete(destination)}>Delete</button>
        <Link to={`/destinations/${destination.id}/notes/new`}>
          <button>Add Note</button>
        </Link>
        <NotesList notes={destination.notes} setSelectedNote={setSelectedNote} />
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