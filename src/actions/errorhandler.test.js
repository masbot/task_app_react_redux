import * as constants from './constants';
import { addSuccess, fetchError, saveError, clearError } from './errorhandler';

it('creates an action for error', () => {
    const error = 'fetch-error';
    const expectedAction = { type: constants.FETCH_ERROR , error };
    expect(fetchError(error)).toEqual(expectedAction);
});

it('creates an action for success', () => {
    const success = 'success';
    const expectedAction = { type: constants.ADD_SUCCESS, success };
    expect(addSuccess(success)).toEqual(expectedAction);
})

it('creates an action for save-error', () => {
    const error = 'save-error';
    const expectedAction = { type: constants.SAVE_ERROR, error };
    expect(saveError(error)).toEqual(expectedAction);
})

it('creates an action for clear error', () => {
    const success = '';
    const expectedAction = { type: constants.CLEAR_ERROR, success};
    expect(clearError(success)).toEqual(expectedAction);
})
