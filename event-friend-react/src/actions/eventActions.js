import { FETCH_EVENTS, NEW_EVENT, DELETE_EVENT, UPDATE_EVENT, GET_APPLICANTS, ADD_APPLICANTS} from './types';

export const fetchEvents = () => dispatch => {
  fetch("http://localhost:5000/events",
    {
      headers:
      {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      }
    })
    .then(res => res.json())
    .then(events =>
    dispatch({
        type: FETCH_EVENTS,
        payload: events
      })
    );
};

export const createEvent = eventData => dispatch => {
  fetch("http://localhost:5000/events", {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    },
    body: JSON.stringify(eventData)
  })
    .then(res => res.json())
    .then(event =>
      dispatch({
        type: NEW_EVENT,
        payload: event
      })
    );
};

export const deleteEvent = id => dispatch => {
  console.log("SİLİNİYOR!");
  fetch(`http://localhost:5000/events/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      }
    }
  )
    .then(() =>
      dispatch({
        type: DELETE_EVENT,
        payload: id
      })
    );
};

export const updateEvent = event => dispatch => {
  console.log("GÜNCELLENDİ!");
  fetch("http://localhost:5000/events", {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    },
    body: JSON.stringify(event)
  })
    .then(res => res.json())
    .then(updatedEvent =>
      dispatch({
        type: UPDATE_EVENT,
        payload: updatedEvent
      }))
}

export const getApplicants = id => dispatch => {
  fetch(`http://localhost:5000/events/${id}/applicants`,
    {
      headers:
      {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      }
    })
    .then(res => res.json())
    .then(applicants =>
    dispatch({
        type: GET_APPLICANTS,
        payload: applicants
      })
    );
}

export const addApplicant = (eventid,userid) => dispatch => {
  fetch(`http://localhost:5000/events/${eventid}/${userid}`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      },
    })
    .then(res => res.json())
    .then(new_applicant =>
    dispatch({
        type: ADD_APPLICANTS,
        payload: new_applicant
      })
    );
}
