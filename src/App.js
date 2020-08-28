import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState(0);
  const [language, setLanguage] = useState("en");
  const [isActive, setIsActive] = useState(true);
  const [registerInfo, setRegisterInfo] = useState({ username: username, password: password, description: description, gender: gender, language: language, isActive: isActive });

  return (
    <div className="container mt-30">
      <div className="row">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Register</h3>
            </div>
            <div className="panel-body">
              <form onSubmit={(e) => { e.preventDefault(); setRegisterInfo({username: username, password: password, description: description, gender: gender, language: language, isActive: isActive });}}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" required="required" placeholder="Input Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" required="required" placeholder="Input Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea className="form-control" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <select className="form-control" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value={0}>Male</option>
                    <option value={1}>Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Language</label>
                  <div>
                    <input type="radio" name="radioLanguage" value="en" checked={language === "en"} onChange={(e) => setLanguage(e.target.value)} />&nbsp;English
                    &nbsp;&nbsp;
                    <input type="radio" name="radioLanguage" value="vi" checked={language === "vi"} onChange={(e) => setLanguage(e.target.value)} />&nbsp;Vietnamese
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <input type="checkbox" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />&nbsp;Is Active?
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                  <button type="reset" className="btn btn-danger">Clear</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">Register Info</h3>
            </div>
            <div className="panel-body">
              <p><strong>Username:</strong> {registerInfo.username}</p>
              <p><strong>Password:</strong> {registerInfo.password}</p>
              <p><strong>Description:</strong> {registerInfo.description}</p>
              <p><strong>Gender:</strong> {registerInfo.gender}</p>
              <p><strong>Language:</strong> {registerInfo.language}</p>
              <p><strong>Is Active:</strong> {registerInfo.isActive ? "true" : "false"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
