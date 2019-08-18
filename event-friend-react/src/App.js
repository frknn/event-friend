import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Events from './components/Events';
import EventForm from './components/EventForm';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <div className="container">
            <EventForm />
            <hr />
            <Events />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
