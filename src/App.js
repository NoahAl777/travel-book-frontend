import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import DestinationsList from './Components/DestinationsList';

function App() {
  const [destinations, setDestinations] = useState()

  useEffect(() => {
    fetch("http://localhost:9292/destinations")
      .then(r => r.json())
      .then(data => setDestinations(data))
  }, [])

  return (
    <div className="App">
      <DestinationsList destinations={destinations} />
    </div>
  );
}

export default App;
