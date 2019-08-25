import { FETCH_EVENTS, NEW_EVENT, DELETE_EVENT, UPDATE_EVENT } from './types';

export const fetchEvents = () => dispatch => {
  fetch("http://localhost:8080/event",
    {
      headers:
      {
        'Authorization': 'bearer ' + localStorage.getItem('access_token')
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
  fetch("http://localhost:8080/event", {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'bearer ' + localStorage.getItem('access_token')
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
  fetch(`http://localhost:8080/event/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Authorization': 'bearer ' + localStorage.getItem('access_token')
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
  fetch("http://localhost:8080/event", {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'bearer ' + localStorage.getItem('access_token')
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
