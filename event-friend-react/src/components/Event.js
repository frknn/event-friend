import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEvent,fetchEvents } from '../actions/eventActions';

class Event extends Component {

  onDeleteEvent = (e) => {
    this.props.deleteEvent(this.props.id);
  }

  render() {

    //Destructuring
    const { id, baslik, kacKisi, detay, etkinlikAdresi, il, ilce, bulusmaYeri } = this.props;

    return (
      <div className="col-md-6 mt-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline">Post id: {id}</h4>
            <i onClick={this.onDeleteEvent} className="fas fa-trash" style={{ cursor: "pointer", margin: "auto 10px" }}></i>
          </div>

          <div style={{ textAlign: "left" }} className="card-body">

            <p className="card-text"><b>Başlık:</b> {baslik}</p>
            <p className="card-text"><b>Aranan kişi sayısı:</b> {kacKisi}</p>
            <p className="card-text"><b>Detaylar:</b> {detay}</p>
            <p className="card-text"><b>Etkinlik Adresi:</b> {etkinlikAdresi}</p>
            <p className="card-text"><b>İl:</b> {il}</p>
            <p className="card-text"><b>İlçe:</b> {ilce}</p>
            <p className="card-text"><b>Buluşma Yeri:</b> {bulusmaYeri}</p>

          </div>

        </div>

      </div>
    )
  }
}

Event.propTypes = {
  deleteEvent: PropTypes.func.isRequired,
  fetchEvents: PropTypes.func.isRequired
}

export default connect(null, { deleteEvent,fetchEvents })(Event);
