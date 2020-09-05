import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

function TaskItem(props) {
    const appContext = useContext(AppContext);
    const {updateTaskStatus, updateTask, deleteTask} = appContext;

    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{props.task.name}</td>
            <td>{props.task.status ? <span role="button" className="label label-success" onClick={() => updateTaskStatus(props.task.id)}>Active</span> : <span role="button" className="label label-danger" onClick={() => updateTaskStatus(props.task.id)}>Inactive</span>}</td>
            <td>
                <button type="button" className="btn btn-warning" onClick={() => updateTask(props.task.id)}><i className="fa fa-pencil-square-o"></i>&nbsp;Edit</button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={() => deleteTask(props.task.id)}><i className="fa fa-trash"></i>&nbsp;Delete</button>
            </td>
        </tr>
    );
}

export default TaskItem;
