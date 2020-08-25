import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

function App() {
  return (    
    <div className="container mt-50">      
      <div className="row">        
        <ColorPicker />
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <SizeSetting />       
          <Reset />
        </div>
      </div>      
      <div className="row">        
        <Result />    
      </div>      
    </div>    
  );
}

export default App;
