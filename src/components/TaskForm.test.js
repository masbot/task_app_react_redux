import React from 'react';
import { shallow } from 'enzyme';
import TaskForm from './TaskForm';

describe('TaskForm', () => {
    const task = 'BUY MILK';
    const mockAddNewTask = jest.fn();
    const props = { addNewTask: mockAddNewTask }
    const taskform = shallow(<TaskForm {...props}/>);

    it('renders correctly', () => {
        expect(taskform).toMatchSnapshot();
    });

    it('initalizes a task in `state`', () => {
        expect(taskform.state()).toEqual({task: ''});
    });

    describe('when typing into the task input', () => {
        beforeEach(() => {
            taskform.find('.input-task').simulate('change', { target: { value: task }});
        });

        it('updates the task in `state`', () => {
            expect(taskform.state().task).toEqual(task);
        });

        describe('and then the user wants to add the new task', () => {
            beforeEach(() => {
                taskform.find('.btn-add-newtask').simulate('click');
            });

            it('calls the addTask callback', () => {
                expect(mockAddNewTask).toHaveBeenCalledWith(task);
            });
        });
    });

});