import React from 'react';
import { useParams, Link } from 'react-router-dom';
import NotesList from "./NotesList";

const DestinationsShow = ({ destinations, setDestinations, setNotes, setSelectedNote }) => {
  const params = useParams()
  const destinationToDisplay = destinations.filter(destination => destination.id == params.id)
  const { country, state_province, city, zipcode, created_at, image, notes } = destinationToDisplay[0]

  const handleDelete = () => {
    fetch(`http://localhost:9292/destinations/${params.id}`, {
      method: "DELETE"
    })
      .then(handleUpdateDestinationsList(params.id))
  }

  const handleUpdateDestinationsList = (paramsId) => {
    setDestinations(destinations.filter((d) => d.id != paramsId))
  }

  return (
    <div className='DestinationsShow'>
      <h2>{`${city}, ${country} - ${state_province}  (${zipcode})`}</h2>
      <img src={`${image}`} width="1200" height="800"></img>
      <br />
      <Link to={`/destinations/${params.id}/edit`}>
        <button>Edit Destination</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/destinations/${params.id}/notes/new`}>
        <button>Add Note</button>
      </Link>
      <NotesList notes={notes} setNotes={setNotes} setSelectedNote={setSelectedNote} />
    </div>
  )
};

export default DestinationsShow;