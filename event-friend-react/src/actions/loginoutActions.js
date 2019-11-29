import { LOG_IN, LOG_OUT, CURR_USER } from './types';

// export const logIn = (url, options) => dispatch => {
//   fetch(url, options)
//   .then(res => res.json())
//   .then(token_resp => localStorage.setItem('acc_tok', token_resp.access_token),
//     dispatch({
//       type: LOG_IN,
//       payload: true
//     }))

// }


export const loggedIn = () => dispatch => {
  let isvisib = false;
  dispatch({
    type: LOG_IN,
    payload: localStorage.getItem('current_user') ? !isvisib : isvisib
  })
} 

export const loggedOut = () => dispatch => {
  dispatch({
    type: LOG_OUT,
    payload: false
  })
}

// export const getCurrUser = (userUrl, userOptions) => dispatch => {
//   console.log('getting curr user');
//   fetch(userUrl, userOptions)
//   .then(res => res.json())
//   .then(currentUser =>
//     dispatch({
//       type: CURR_USER,
//       payload: currentUser
//     }))

// }


// export const logOut = (logOutUrl, logOutOptions) => dispatch => {
//   fetch(logOutUrl, logOutOptions)
//   localStorage.setItem('acc_tok', null)
//   dispatch({
//     type: LOG_OUT,
//     payload: null,
//   })
// }

