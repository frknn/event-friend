import React from 'react';
import Events from './components/Events';
import EventForm from './components/EventForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <EventForm />
        <hr/>
        <Events />
      </div>

    </div>
  );
}

export default App;
