import React, { Component } from 'react';
import {Modal} from 'react-bootstrap'
import { connect } from 'react-redux';
import { getApplicants } from '../actions/eventActions';



class Applicants extends Component {

  constructor(props) {
    super(props)

    this.state = {
      applicants: []
    }
  }

  // componentDidMount() {
  //   //this.props.getApplicants(this.props.eventid);
  //   // fetch(`http://localhost:5000/events/${this.props.eventid}/applicants`,
  //   //   {
  //   //     headers:
  //   //     {
  //   //       'Authorization': 'Bearer ' + localStorage.getItem('access_token')
  //   //     }
  //   //   })
  //   //   .then(res => res.json())
  //   //   .then(result => {
  //   //     this.setState({
  //   //       applicants: result
  //   //     })
  //   //   }
  //   //   );
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newApplicant) {
  //     this.props.applicants.push(nextProps.newApplicant);
  //   }
  // }

  render() {
    // let appls2 = this.props.appls.map(applicant => (
    //   <li>{applicant.ad + " " + applicant.soyad}</li>
    // ))
    return (
      <div>
        <Modal show={this.props.propshowmodal} onHide={this.props.hidemodal}>

          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>KATILIMCILAR</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <ul>
                {/* {appls2} */}
              </ul>
            </Modal.Body>

            <Modal.Footer>
              <Modal.Button variant="secondary">Close</Modal.Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // events: state.events.items,
  // newEvent: state.events.item,
  // deletedId: state.events.deletedId,
  sapplicants: state.events.applicants,
  newApplicant: state.events.applicant
})

export default connect(mapStateToProps, { getApplicants })(Applicants);