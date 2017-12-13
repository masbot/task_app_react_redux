import * as constants from './constants';

export const saveError = () => {
    return {
        type: constants.SAVE_ERROR,
        error: 'save-error'
    }
}

export const fetchError = () => {
    return {
        type: constants.FETCH_ERROR,
        error: 'fetch-error'
    }
}

export const addSuccess = () => {
    return {
        type: constants.ADD_SUCCESS,
        success: 'success'
    }
}

export const clearError = () => {
    return {
        type: constants.CLEAR_ERROR,
        success: ''
    }
}