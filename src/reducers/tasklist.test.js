import tasklistReducer from './tasklist';
import { FETCH_TASKLIST, ADD_NEWTASK } from '../actions/constants';

describe('tasklistReducer', () => {
    const task = 'TASK';
    const tasklistData = {"1": "TASK"};

    it('adds a new task', () => {
        expect(tasklistReducer({}, {type: ADD_NEWTASK, task })).toEqual(tasklistData);
    });

    it('fetches and sets the tasks data', () => {
        expect(tasklistReducer({}, {type: FETCH_TASKLIST, tasks: tasklistData})).toEqual(tasklistData)
    });
});