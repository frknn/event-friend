import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Events from './components/Events';
import EventForm from './components/EventForm';
import UpdateEvent from './components/UpdateEvent';
import Header from './components/layout/Header';

import store from './store';

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store} >
          <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/" component={()=><Events/>} />
              <Route exact path="/postevent" component={()=><EventForm/>} />
              <Route exact path="/update/:id" render={(props)=><UpdateEvent {...props}/>} />
            </div>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
