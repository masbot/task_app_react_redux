//http://cfassignment.herokuapp.com/samyoo/tasks 
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as constants from './constants';
import { fetchTasklist, saveTasklist, addNewTask, removeTask } from './tasklist';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ tasks: {}});
const mockResponse = { tasks: {} };

describe('tasklist action', () => {
    it('creates an action to add new task', () => {
        const task = 'task';
        const expectedAction = { type: constants.ADD_NEWTASK , task };
        expect(addNewTask(task)).toEqual(expectedAction);
    });

    it('create an action to remove a task', () => {
        const id = '1';
        const expectedAction = { type: constants.REMOVE_TASK, id };
        expect(removeTask(id)).toEqual(expectedAction);
    });

    fetchMock.get('http://cfassignment.herokuapp.com/samyoo/tasks', mockResponse);
    
    it('creates an async action to fetch the tasks', () => {
        const expectedActions = [{ type: constants.FETCH_TASKLIST, tasks: mockResponse.tasks}];
        return store.dispatch(fetchTasklist()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    });
});

