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

import DestinationsIndex from './Components/DestinationsIndex';
import DestinationsShow from './Components/DestinationsShow';

function App() {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState([]);
  const [selectedNote, setSelectedNote] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/destinations")
      .then(r => r.json())
      .then(data => setDestinations(data))
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/notes")
      .then(r => r.json())
      .then(data => setNotes(data))
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<DestinationsIndex destinations={destinations} />} />
        <Route path="/destinations/:id" element={<DestinationsShow />} />
        {/* <Route path="/" element={<DestinationsList destinations={destinations} setDestinations={setDestinations} setSelectedDestination={setSelectedDestination} setSelectedNote={setSelectedNote} notes={notes} setNotes={setNotes} />} /> */}
        <Route path="/destinations/new" element={<DestinationForm destinations={destinations} setDestinations={setDestinations} />} />
        <Route path="/destinations/:destination_id/edit" element={<EditDestinationsForm selectedDestination={selectedDestination} destinations={destinations} setDestinations={setDestinations} />} />
        <Route path="/destinations/:destination_id/notes/new" element={<NotesForm destinations={destinations} setDestinations={setDestinations} notes={notes} setNotes={setNotes} />} />
        <Route path="/destinations/:destination_id/notes/:note_id/edit" element={<EditNotesForm selectedNote={selectedNote} notes={notes} setNotes={setNotes} />} />
      </Routes>
    </div>
  );
}

export default App;
