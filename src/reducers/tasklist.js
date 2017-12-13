import * as constants from '../actions/constants';

const tasks = (state = {}, action) => {
    switch(action.type) {
        case constants.FETCH_TASKLIST:
            return action.tasks == null ? {} : action.tasks;
        case constants.ADD_NEWTASK:
            const tasks = state;
            const ids = Object.keys(tasks);
            const max_id = ids.length > 0 ? Math.max(...ids) : 0;
            return Object.assign({}, state, {[max_id+1]: action.task});
        case constants.REMOVE_TASK:
            const newTasks = Object.assign({}, state);
            delete newTasks[action.id];
            return newTasks;  
        default:
            return state;
    }
}

export default tasks;