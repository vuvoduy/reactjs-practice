import React, { useState, useContext } from 'react';
import getGuid from '../../src/libs/guid';
import { useEffect } from 'react';
import AppContext from '../contexts/AppContext';
function TaskForm() {
    const [name, setName] = useState("");
    const [status, setStatus] = useState(true);
    const appContext = useContext(AppContext);
    const {selectedTask, setIsDisplayForm, addTask} = appContext;    
    useEffect(() => {
        if(selectedTask){
            setName(selectedTask.name);
            setStatus(selectedTask.status);
        }        
    }, [selectedTask])

    const submit = (e) => {
        e.preventDefault();       
        const task = {id: selectedTask ? selectedTask.id : getGuid(), name: name, status: status};
        addTask(task);
        setName("");
        setStatus(true);
    }
    
    const cancel = (e) => {
        e.preventDefault();
        if(!selectedTask){
            setName("");
            setStatus(true);
        }   
    }

    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">{selectedTask && selectedTask.id ? "Update" : "Add"} Task<a role="button" className="pull-right" onClick={() => setIsDisplayForm(false)}><i className="fa fa-times-circle"></i></a></h3>                
            </div>
            <div className="panel-body">
                <form onSubmit={(e) => submit(e)} onReset={(e) => cancel(e)}>
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
