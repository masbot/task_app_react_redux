import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class TaskForm extends Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <FormControl 
                            placeholder="NEW TASK"
                            className="input-task" 
                            onChange={event => this.setState({task: event.target.value})}
                        />
                    </FormGroup>
                </Form>
                <Button className="btn btn-add-newtask" onClick={() => this.props.addNewTask(this.state.task)}>Submit</Button>
            </div>
        )
    }
}

export default TaskForm;