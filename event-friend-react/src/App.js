import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Events from './components/Events';
import EventForm from './components/EventForm';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import UpdateEvent from './components/UpdateEvent';
import Header from './components/layout/Header';
import { ProtectedRoute } from './components/ProtectedRoute';

import store from './store';

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store} >
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" render={(props) => <RegistrationForm {...props} />} />
                <Route exact path="/login" render={(props) => <LoginForm {...props} />} />
                <ProtectedRoute exact path="/home" component={() => <Events />} />
                <ProtectedRoute exact path="/post" component={(props) => <EventForm {...props} />} />
                <ProtectedRoute exact path="/update/:id" component={(props) => <UpdateEvent {...props} />} />
                <Route render={() => <div>Page Not Found!</div>} />
              </Switch>
            </div>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
