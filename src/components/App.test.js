import React from 'react';
import { mount, shallow } from 'enzyme';
import { App } from './App';
import TaskForm from './TaskForm';

describe('App', () => {
    const mockFetchtasklist = jest.fn();
    let props = { tasks: {"1": "TASK"}};
    let app = shallow(<App {...props}/>);
    const task = "BUY MILK";
    
    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });
    
    it('TaskForm does not appear', () => {
        expect(app.find('TaskForm').exists()).toBe(false);
    });

    describe('clicking the `add task`', () => {
        beforeEach(() => {
            app.find('.btn-add-task').simulate('click');
        });
        
        it('TaskForm appears', () => {
            expect(app.find('TaskForm').exists()).toBe(true);
        });
    });

    describe('when mounted', () => {
        beforeEach(() => {
            let props = { tasks: {"1": "TASK"}};
            props.fetchTasklist = mockFetchtasklist;
            app = mount(<App {...props}/>);
        });

        it('dispatches the `fetchTasklist()` method it receives from props', () => {
            expect(mockFetchtasklist).toHaveBeenCalled();
        });
    });

    describe('when showing error and success messages', () => {
        beforeEach(() => {
            let props = {tasks: {"1": "TASK"}, errorhandler: 'fetch-error'};
            app = shallow(<App  {...props}/>)
        })

        it('shows error message when fetching for data fails', () => {
            expect(app.find('.error').exists()).toBe(true);
        });
    });

});