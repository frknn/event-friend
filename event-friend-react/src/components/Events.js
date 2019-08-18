import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/eventActions'
import Event from "./Event";

class Events extends Component {

  componentWillMount() {
    this.props.fetchEvents();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newEvent) {
      this.props.events.unshift(nextProps.newEvent);
    }
    if (nextProps.deletedId) {
      
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
        {content}
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
  deletedId: state.events.deletedId
})

export default connect(mapStateToProps, { fetchEvents })(Events);