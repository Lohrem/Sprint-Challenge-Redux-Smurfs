/*
  Be sure to import in all of the action types from `../actions`
*/
import { GET_SMURF, GET_SMURF_SUCCESS, GET_SMURF_FAIL, ADD_SMURF } from '../actions'
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurf: false,
  addingSmurf: false,
  error: ''
}

export const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_SMURF:
      return {...state, fetchingSmurf: true, error: ''}
    case GET_SMURF_SUCCESS:
      return {...state, fetchingSmurf: false, smurfs: action.payload, error: ''}
    case GET_SMURF_FAIL:
      return {...state, fetchingSmurf: false, error: action.payload}
    case ADD_SMURF:
      return {...state, smurfs: [...state.smurfs, action.payload]}
    default:
      return state
  }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
