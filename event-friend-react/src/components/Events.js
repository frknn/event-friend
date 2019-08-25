import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/eventActions'
import '../styles/Events.scss';
import Event from "./Event";

class Events extends Component {

  componentDidMount() {
    this.props.fetchEvents();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newEvent) {
      this.props.events.unshift(nextProps.newEvent);
    }
  }

  render() {
    let content = this.props.events.map(event => (
      <Event
        key={event.id}
        id={event.id}
        baslik={event.baslik}
        kacKisi={event.kacKisi}
        detay={event.detay}
        etkinlikAdresi={event.etkinlikAdresi}
        il={event.il}
        ilce={event.ilce}
        bulusmaYeri={event.bulusmaYeri}
      />
    ))
    return (
      <div className="container">
        <h1 className="mt-3">Etkinlikler</h1>
        <hr />
        <div className="card-columns">
          {content}
        </div>
      </div>
    )
  }
}

Events.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  newEvent: PropTypes.object,
  deletedId: PropTypes.number
}

const mapStateToProps = state => ({
  events: state.events.items,
  newEvent: state.events.item,
  deletedId: state.events.deletedId,
  // currentUser: state.logs.currUser
})

export default connect(mapStateToProps, { fetchEvents })(Events);