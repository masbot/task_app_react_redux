import * as constants from '../actions/constants';

const errorhandler = (state = '', action) => {
    switch(action.type) {
        case constants.SAVE_ERROR:
            return action.error;
        case constants.FETCH_ERROR:
            return action.error;
        case constants.ADD_SUCCESS:
            return action.success;
        case constants.CLEAR_ERROR:
            return action.success;
        default:
            return state;
    }
}

export default errorhandler;