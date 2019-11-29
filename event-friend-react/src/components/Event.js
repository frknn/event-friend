import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Applicants from './Applicants';
import { connect } from 'react-redux';
import { createEvent, deleteEvent, fetchEvents, updateEvent, addApplicant } from '../actions/eventActions';

class Event extends Component {

  state = {
    showApplicants: false,
    applicants: [],
    showmodal: false
  }

  onDeleteEvent = (e) => {
    this.props.deleteEvent(this.props.id);
  }

  handleClose = () => {
    this.setState({
      showmodal: false
    })
  }

  onClickEvent = (e) => {
    fetch(`http://localhost:5000/events/${this.props.id}/applicants`,
      {
        headers:
        {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(res => res.json())
      .then(result => {
        this.setState({
          applicants: result,
          // showApplicants: !this.state.showApplicants,
          showmodal: true
        })
      }
      );
    // this.setState({
    //   showmodal: true
    // })
  }

  applyEvent = async (e) => {
    //this.props.addApplicant(this.props.id,JSON.parse(localStorage.getItem('current_user'))["_id"].toString())
    const res = await fetch(`http://localhost:5000/events/${this.props.id}/${JSON.parse(localStorage.getItem('current_user'))["_id"].toString()}`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      },
    })

    const resjson = await res.json()
    let myarr = this.state.applicants
    myarr.push(resjson)
    this.setState({
      applicants: myarr
    })

    console.log("event id: " + this.props.id + " user id: " + JSON.parse(localStorage.getItem('current_user'))["_id"].toString());
  }

  render() {

    //Destructuring
    const { id, baslik, kacKisi, detay, etkinlikAdresi, il, ilce, bulusmaYeri } = this.props;

    let myEventApplicants = this.state.applicants.map(applicant => (
      <li>{applicant.ad + " " + applicant.soyad}</li>
    ))

    console.log(JSON.parse(localStorage.getItem("current_user"))["gonderiler"])
    console.log(id.toString())

    return (
      <div className="card" style={{ display: "" }}>
        <div className="card-header d-flex justify-content-between">
          <h4 className="d-inline">{baslik}</h4>
          {
            JSON.parse(localStorage.getItem("current_user"))["gonderiler"].indexOf(id) !== -1 ?
            <div style={{margin: "5px 0px 5px auto" }}>
            <Link style={{color:"black"}} className="fas fa-edit" to={`/update/${id}`}></Link>
            <i onClick={this.onDeleteEvent} className="fas fa-trash" style={{ cursor: "pointer", margin: "auto 10px" }}></i>
            </div>
            : null
          }
          <i style={{paddingTop: "50px" }} onClick={this.onClickEvent} className="fas fa-angle-down" style={{ cursor: "pointer", margin: "10px 0px 10px 0px" }} name="arrow"></i>

        </div>

        <div style={{ textAlign: "left" }} className="card-body">

          <p className="card-text"><b>Aranan kişi sayısı:</b> {kacKisi}</p>
          <p className="card-text"><b>Detaylar:</b> {detay}</p>
          <p className="card-text"><b>Etkinlik Adresi:</b> {etkinlikAdresi}</p>
          <p className="card-text"><b>İl:</b> {il}</p>
          <p className="card-text"><b>İlçe:</b> {ilce}</p>
          <p className="card-text"><b>Buluşma Yeri:</b> {bulusmaYeri}</p>
          <button onClick={this.applyEvent} name="applyButton" type="button" className="btn btn-success btn-block">Katıl</button>
          {/* {this.state.showApplicants ? <div> */}
          {/* <Applicants propshowmodal={this.state.showmodal} hidemodal={this.handleClose} appls = {this.state.applicants} eventid = {this.props.id} ></Applicants> */}
          <Modal show={this.state.showmodal} onHide={this.handleClose}>

              <Modal.Header closeButton>
                <Modal.Title>KATILIMCILAR</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <ul>
                  {myEventApplicants}
                </ul>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
          </Modal>
          {/* </div> : null} */}
        </div>

      </div>
    )
  }
}

Event.propTypes = {
  deleteEvent: PropTypes.func.isRequired,
  fetchEvents: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired,
  createEvent: PropTypes.func.isRequired,

}

export default connect(null, { createEvent, deleteEvent, fetchEvents, updateEvent, addApplicant })(Event);
