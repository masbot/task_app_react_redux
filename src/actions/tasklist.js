import axios from 'axios';
import * as constants from './constants';

export const addNewTask = (task) => {
    return {
        type: constants.ADD_NEWTASK,
        task
    }
}

export const removeTask = (id) => {
    return {
        type: constants.REMOVE_TASK,
        id
    }
}

export const fetchTasklist = () => {
    return dispatch => {
        return axios.get('http://cfassignment.herokuapp.com/samyoo/tasks')
            .then(response => {
                dispatch({type: constants.FETCH_TASKLIST, tasks: response.data.tasks })
            })
            .catch(error => {
                dispatch({type: constants.FETCH_ERROR, error: 'fetch-error' });
            });
        }
}

export const saveTasklist = (data) => {
    return dispatch => {
        return axios.post('http://cfassignment.herokuapp.com/samyoo/tasks', {tasks: data})
        .then(response => {
            dispatch({type: constants.SAVE_TASKLIST, tasks: response });
        })
        .then(() => {
            dispatch({type: constants.ADD_SUCCESS, success: 'success'})
        })
        .catch(() => {
            dispatch({type: constants.SAVE_ERROR, error: 'save-error' });
        })
    }
}

