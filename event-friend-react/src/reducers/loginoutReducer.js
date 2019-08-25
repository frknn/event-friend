import { LOG_IN, LOG_OUT, CURR_USER } from '../actions/types';

const initialState = {
  // currUser: null,
  isVisible: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isVisible: action.payload
      }
    case LOG_OUT:
      return {
        ...state,
        isVisible: action.payload
      }
//     case CURR_USER:
//       return {
//         ...state,
//         currUser: action.payload
//       }
//     case LOG_OUT:
//       return {
//         ...state,
//         currUser: action.payload,
//         isVisible: false
//       }

    default:
      return state;
  }
}
