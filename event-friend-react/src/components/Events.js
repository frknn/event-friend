import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/eventActions'
import Event from "./Event";

class Events extends Component {

  componentWillMount() {
    this.props.fetchEvents();
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

const mapStateToProps = state => ({
  events: state.events.items
})

export default connect(mapStateToProps, { fetchEvents })(Events);