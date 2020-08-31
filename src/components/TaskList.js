import React, { useState } from 'react';
import TaskItem from './TaskItem';

function TaskList(props) { 
    const [filterName, setFilterName] = useState("");
    const [filterStatus, setFilterStatus] = useState(-1);   
    const elementTask = props.tasks.map((task, index) => <TaskItem key={task.id} index={index} task={task} updateTaskStatus={props.updateTaskStatus} deleteTask={props.deleteTask} updateTask={props.updateTask}></TaskItem>)
    return (
        <div className="row mt-10">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>No#</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input type="text" className="form-control" value={filterName} onChange={(e) => {setFilterName(e.target.value);props.filterChange(e.target.value, filterStatus)}}/>
                            </td>
                            <td>
                                <select className="form-control" required="required" value={filterStatus} onChange={(e) => {setFilterStatus(parseInt(e.target.value));props.filterChange(filterName, parseInt(e.target.value))}}>
                                    <option value={1}>Active</option>
                                    <option value={0}>Inactive</option>
                                    <option value={-1}>All</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        {elementTask}                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TaskList;
