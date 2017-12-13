import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addNewTask, fetchTasklist, saveTasklist, removeTask } from '../actions/tasklist';
import { clearError } from '../actions/errorhandler';
import TaskForm from './TaskForm';
import Task from './Task';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            taskformDisplay: false
        }
    }

    componentDidMount() {
        this.props.fetchTasklist();
    }

    addTask = () => {
        this.setState({ taskformDisplay: true });
    }

    addNewTask = (task) => {
        this.props.addNewTask(task);
        this.setState({taskformDisplay: false });
    }

    remove = (id) => {
        this.props.removeTask(id);
    }

    save = () => {
        this.props.saveTasklist(this.props.tasks);
    }

    clear = () => {
        this.props.clearError();
    }

    createMessage = (errortype) => {
        let msg;
        let type;

        if(errortype === 'fetch-error'){
            msg = 'Please Reload The Page';
            type = 'error';
        }else if(errortype === 'save-error'){
            msg = 'Please Try Again';
            type = 'error';
        }else if(errortype === 'success'){
            msg = 'Your List Has Been Successfully Saved!';
            type = 'success';
        }
        msg = <div className={`alert ${type}`}>
                <span>{msg}</span>
                <i className="fa fa-times-circle" onClick={this.clear} aria-hidden="true"/>
             </div>;

        return msg;
    }

    render() {
        let taskform;
        const tasklist = [];
        const errorhandler = this.props.errorhandler;
        let msg;

        if( errorhandler) {
            msg = this.createMessage(errorhandler);
        }

        if(this.state.taskformDisplay){
            taskform = <TaskForm addNewTask={this.addNewTask}/>;
        }

        if(Object.keys(this.props.tasks).length != 0){
            let tasks = this.props.tasks;
            for(let key in tasks){
                tasklist.push(<Task key={key} id={key} task={tasks[key]} remove={this.remove}/>)
            }
        }

        return (
            <div className="container">
                <header>
                    <div className="h_1"><span className='title'>Tasks</span></div>
                    <div className="h_2">
                        <Button className="btn btn-add-task" onClick={this.addTask}>Add Task</Button>
                        <Button className="btn btn-save-tasklist" onClick={this.save}>Save</Button>
                    </div>
                </header>
                <section>
                    <div className="error-msg">
                        {msg}
                    </div>
                    <div className="task-form">
                        { taskform }
                    </div>
                    <div className="task-list">
                        { tasklist.reverse() }
                    </div>
                </section>
            </div>
        )
    }
}

export default connect(state => state, {fetchTasklist, saveTasklist, addNewTask, removeTask, clearError})(App);