import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import DestinationsList from './Components/DestinationsList';
import DestinationForm from './Components/DestinationForm';
import EditDestinationsForm from './Components/EditDestinationsForm';
import NotesForm from './Components/NotesForm';
import EditNotesForm from './Components/EditNotesForm';

function App() {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState([]);
  const [selectedNote, setSelectedNote] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/destinations")
      .then(r => r.json())
      .then(data => setDestinations(data))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<DestinationsList destinations={destinations} setSelectedDestination={setSelectedDestination} setSelectedNote={setSelectedNote} />} />
        <Route path="/destinations/new" element={<DestinationForm />} />
        <Route path="/destinations/:destination_id/edit" element={<EditDestinationsForm selectedDestination={selectedDestination} />} />
        <Route path="/destinations/:destination_id/notes/new" element={<NotesForm />} />
        <Route path="/destinations/:destination_id/notes/:notes_id/edit" element={<EditNotesForm />} />
      </Routes>
    </div>
  );
}

export default App;
