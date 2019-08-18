import { FETCH_EVENTS, NEW_EVENT } from './types';

export const fetchEvents = () => dispatch => {
  fetch("http://localhost:8080/event")
    .then(res => res.json())
    .then(events =>
      dispatch({
        type: FETCH_EVENTS,
        payload: events
      })
    );
};

export const createEvent = (eventData) => dispatch => {
  fetch("http://localhost:8080/event", {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })
    .then(res => res.json())
    .then(event =>
      dispatch({
        type: NEW_EVENT,
        payload: event
      }));
}
