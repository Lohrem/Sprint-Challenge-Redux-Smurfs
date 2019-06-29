/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'

export const GET_SMURF = "GET_SMURF"
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS"
export const GET_SMURF_FAIL = "GET_SMURF_FAIL"

export const ADD_SMURF = "ADD_SMURF"
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURF})
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => dispatch({ type: GET_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_SMURF_FAIL, payload: err }))
}
export const addSmurf = smurf => {
  return {
    type: ADD_SMURF,
    payload: { name: smurf.name, age: smurf.age, height: smurf.height }
  }
}