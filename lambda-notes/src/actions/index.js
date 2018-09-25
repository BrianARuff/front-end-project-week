import axios from 'axios';

export const FETCHING_NOTES = "FETCHING_NOTES";
export const FETCHING_NOTES_SUCCESSFUL = "FETCHING_NOTES_SUCCESSFUL";
export const FETCHING_NOTES_FAILURE = "FETCHING_NOTES_FAILURE";
export const CREATING_NOTE = "CREATING_NOTE";
export const CREATING_NOTE_SUCESSFULL = "CREATING_NOTE_SUCESSFULL";
export const CREATING_NOTE_FAILURE = "CREATING_NOTE_FAILURE";
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
export const DELETE_NOTE_FAILURE = "DELETE_NOTE_FAILURE";

export const getNotes = () => {
  return dispatch => {
    dispatch({type: FETCHING_NOTES});
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(resp => dispatch({type: FETCHING_NOTES_SUCCESSFUL, payload: resp.data}))
      .catch(err => dispatch({type: FETCHING_NOTES_FAILURE, payload: new Error(err)}));
  }
}

export const createNote = (note) => {
  return dispatch => {
    dispatch({type: CREATING_NOTE});
    axios
      .post('https://killer-notes.herokuapp.com/note/create', note)
      .then(resp => dispatch({type: CREATING_NOTE_SUCESSFULL, payload: resp.data}))
      .catch(err => dispatch({type: CREATING_NOTE_FAILURE, payload: new Error(err)}));
  }
}

export const deleteNote = (id) => {
  return dispatch => {
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(resp => dispatch({type: DELETE_NOTE_SUCCESS, payload: resp.data}))
      .catch(err => dispatch({type: DELETE_NOTE_FAILURE, payload: new Error(err)}));
  }
}