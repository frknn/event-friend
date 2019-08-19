import { FETCH_EVENTS, NEW_EVENT, DELETE_EVENT, UPDATE_EVENT } from '../actions/types';

const initialState = {
  items: [],
  item: {},
  deletedId: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        items: action.payload
      }
    case NEW_EVENT:
      return {
        ...state,
        item: action.payload
      }
    case DELETE_EVENT:
      return {
        ...state,
        items: state.items.filter(event => event.id !== action.payload)
      }
    case UPDATE_EVENT:
      return {
        ...state,
        items: state.items.map(event => event.id === action.payload.id ? action.payload : event)
      }

    default:
      return state;
  }
}