import React from 'react';
import { shallow } from 'enzyme';
import Task from './task';

describe('Task', () => {
    const mockRemoveTask = jest.fn();
    const props = { remove: mockRemoveTask };
    const task = shallow(<Task {...props}/>);

    it('renders correctly', () => {
        expect(task).toMatchSnapshot();
    });

    describe('when user wants to remove task', () => {
        beforeEach(() => {
            task.find('.btn-remove').simulate('click');
        });

        it('calls the removeTask callback', () => {
            expect(mockRemoveTask).toHaveBeenCalled();
        });
    })

});