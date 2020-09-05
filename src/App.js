import React from 'react';
import './App.css';
import {AppProvider} from './contexts/AppContext';
//import getGuid from '../src/libs/guid';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isDisplayForm, setIsDisplayForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filterInfo, setFilterInfo] = useState({ name: "", status: -1 });
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortInfo, setSortInfo] = useState({ by: "status", value: 1 });

  useEffect(() => {
    if (localStorage && localStorage.getItem("tasks")) {
      const localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(localStorageTasks);
    }
  }, [])

  /* const initTask = () => {
    const tasks = [
      { id: getGuid(), name: "Reactjs", status: true },
      { id: getGuid(), name: "Angularjs", status: false },
      { id: getGuid(), name: "Vuejs", status: true },
    ];
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }; */

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

  const filterChange = (filterName, filterStatus) => {
    setFilterInfo({ name: filterName, status: filterStatus });
  }

  const searchChange = (keyword) => {
    setSearchKeyword(keyword);
  }

  const sortChange = (sortBy, sortValue) => {
    setSortInfo({ by: sortBy, value: sortValue });
  }

  const elementTaskForm = isDisplayForm ? <TaskForm /> : null;
  const filteredTasks = [...tasks]
    .filter(t => (!searchKeyword || t.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1))
    .filter(t => (!filterInfo.name || t.name.toLowerCase().indexOf(filterInfo.name.toLowerCase()) > -1) && (filterInfo.status === -1 || t.status === (filterInfo.status === 1)))
    .sort((x, y) => x[sortInfo.by] >= y[sortInfo.by] ? sortInfo.value : -(sortInfo.value));

  return (
    <AppProvider value={{filteredTasks, updateTaskStatus, deleteTask, updateTask, filterChange, selectedTask, setIsDisplayForm, addTask, searchChange, sortInfo, sortChange}}>    
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
          <div className="row mt-10">
            <Control />
          </div>
          <div className="row mt-10">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
    </AppProvider>
  );
}

export default App;
