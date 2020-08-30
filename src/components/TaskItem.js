import React from 'react';

function TaskItem(props) {
    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{props.task.name}</td>
            <td>{props.task.status ? <span role="button" className="label label-success" onClick={() => props.updateTaskStatus(props.task.id)}>Active</span> : <span role="button" className="label label-danger" onClick={() => props.updateTaskStatus(props.task.id)}>Inactive</span>}</td>
            <td>
                <button type="button" className="btn btn-warning" onClick={() => props.updateTask(props.task.id)}><i className="fa fa-pencil-square-o"></i>&nbsp;Edit</button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={() => props.deleteTask(props.task.id)}><i className="fa fa-trash"></i>&nbsp;Delete</button>
            </td>
        </tr>
    );
}

export default TaskItem;
