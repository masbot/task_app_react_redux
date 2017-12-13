import * as constants from '../actions/constants';
import errorhandlerReducer from './errorhandler';

it('set state of errorhandler to be fetch-error', () => {
    expect(errorhandlerReducer({}, { type: constants.FETCH_ERROR, error: 'fetch-error'})).toEqual('fetch-error');
});

it('set state of errorhandler to be save-error', () => {
    expect(errorhandlerReducer({}, { type: constants.SAVE_ERROR, error: 'save-error'})).toEqual('save-error');
});

it('set state of errorhandler to be success', () => {
    expect(errorhandlerReducer({}, { type: constants.ADD_SUCCESS, success: 'success'})).toEqual('success');
});

it('set state of errorhandler to be "" ', () => {
    expect(errorhandlerReducer({}, { type: constants.CLEAR_ERROR, success: ''})).toEqual('');
});
