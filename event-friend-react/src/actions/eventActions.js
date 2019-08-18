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
