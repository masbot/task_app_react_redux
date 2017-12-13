import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <div className="task-item">
                <div>{this.props.task}</div>
                {/* <i className="fa fa-pencil edit" aria-hidden="true" /> */}
                <i className="fa fa-trash-o delete btn-remove" onClick={() => this.props.remove(this.props.id)} aria-hidden="true" />
            </div>
        )
    }
}

export default Task;