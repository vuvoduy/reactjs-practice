import React from 'react';
import './App.css';
import getGuid from '../src/libs/guid';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isDisplayForm, setIsDisplayForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState(-1);

  useEffect(() => {
    if (localStorage && localStorage.getItem("tasks")) {
      const localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(localStorageTasks);
    }
  }, [])

  const initTask = () => {
    const tasks = [
      { id: getGuid(), name: "Reactjs", status: true },
      { id: getGuid(), name: "Angularjs", status: false },
      { id: getGuid(), name: "Vuejs", status: true },
    ];
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const addTask = (task) => {
    if (tasks) {
      const newTask = tasks.find(t => t.id === task.id);
      //for Update Task
      if (newTask) {
        newTask.name = task.name;
        newTask.status = task.status;
        localStorage.setItem("tasks", JSON.stringify([...tasks]));
        setTasks([...tasks]);

        setSelectedTask(null);
        setIsDisplayForm(false);
        return;
      }
    }
    //for Add Task
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
    setTasks([...tasks, task]);
    setIsDisplayForm(false);
  }

  const deleteTask = (id) => {
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) {
      return;
    }

    if (!window.confirm("Confirm?")) {
      return;
    }

    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify([...tasks]));
    setTasks([...tasks]);
    setIsDisplayForm(false);
  }

  const updateTask = (id) => {
    const task = tasks.find(t => t.id === id);
    if (!task) {
      return;
    }
    setSelectedTask(task);
    setIsDisplayForm(true);
  }

  const updateTaskStatus = (id) => {
    const task = tasks.find(t => t.id === id);
    if (!task) {
      return;
    }
    task.status = !task.status;
    localStorage.setItem("tasks", JSON.stringify([...tasks]));
    setTasks([...tasks]);
    setIsDisplayForm(false);
  }

  const filterChange = (name, status) => {
    setFilterName(name);
    setFilterStatus(status);
  }

  const elementTaskForm = isDisplayForm ? <TaskForm selectedTask={selectedTask} setIsDisplayForm={setIsDisplayForm} addTask={addTask} /> : null;
  const filteredTasks = [...tasks].filter(t => (!filterName || t.name.toLowerCase().indexOf(filterName) > -1) && (filterStatus === -1 || t.status === (filterStatus === 1)));

  return (
    <div className="container">
      <div className="row text-center">
        <h1>Task Management</h1>
      </div>
      <div className="row">
        <hr />
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          {elementTaskForm}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-primary" onClick={() => { setSelectedTask(null); setIsDisplayForm(!isDisplayForm); }}><span className="glyphicon glyphicon-plus"></span>&nbsp;Add Task</button>
              {/* &nbsp;
              <button type="button" className="btn btn-warning" onClick={() => initTask()}>Init Task</button> */}
            </div>
          </div>
          <Control />
          <TaskList tasks={filteredTasks} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} updateTask={updateTask} filterChange={filterChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
