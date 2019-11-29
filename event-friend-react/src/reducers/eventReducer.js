import { FETCH_EVENTS, NEW_EVENT, DELETE_EVENT, UPDATE_EVENT, GET_APPLICANTS, ADD_APPLICANTS } from '../actions/types';

const initialState = {
  items: [],
  item: {},
  deletedId: 0,
  applicants:[],
  applicant: {}
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
        items: state.items.filter(event => event._id !== action.payload)
      }
    case UPDATE_EVENT:
      return {
        ...state,
        items: state.items.map(event => event._id === action.payload.id ? action.payload : event)
      }
    case GET_APPLICANTS:
      return{
        ...state,
        applicants: action.payload
      }
    case ADD_APPLICANTS:
      return{
        ...state,
        applicant: action.payload
      }
    
    default:
      return state;
  }
}