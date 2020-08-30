import React, { useState } from 'react';
import getGuid from '../../src/libs/guid';
import { useEffect } from 'react';

function TaskForm(props) {
    const [name, setName] = useState("");
    const [status, setStatus] = useState(true);

    useEffect(() => {
        if(props.selectedTask){
            setName(props.selectedTask.name);
            setStatus(props.selectedTask.status);
        }        
    }, [props.selectedTask])

    const addTask = (e) => {
        e.preventDefault();       
        const task = {id: props.selectedTask ? props.selectedTask.id : getGuid(), name: name, status: status};
        props.addTask(task);
        setName("");
        setStatus(true);
    }
    
    const cancel = (e) => {
        e.preventDefault();
        if(!props.selectedTask){
            setName("");
            setStatus(true);
        }   
    }

    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">{props.selectedTask && props.selectedTask.id ? "Update" : "Add"} Task<a role="button" className="pull-right" onClick={() => props.setIsDisplayForm(false)}><i className="fa fa-times-circle"></i></a></h3>                
            </div>
            <div className="panel-body">
                <form onSubmit={(e) => addTask(e)} onReset={(e) => cancel(e)}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" required="required" placeholder="Input Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <select className="form-control" required="required" value={status} onChange={(e) => setStatus(JSON.parse(e.target.value))}>
                            <option value={true}>Active</option>
                            <option value={false}>Inactive</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success"><i className="fa fa-floppy-o"></i>&nbsp;Save</button>
                  &nbsp;
                  <button type="reset" className="btn btn-danger"><i className="fa fa fa-refresh"></i>&nbsp;Cancel</button>
                </form>
            </div>
        </div>

    );
}

export default TaskForm;
