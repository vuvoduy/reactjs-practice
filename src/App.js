import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

function App() {
  const [color, setColor] = useState('blue');
  const [fontSize, setFontSize] = useState(50);
  const reset = () => {
    setColor('blue');
    setFontSize(50);
  };
  return (
    <div className="container mt-50">
      <div className="row">
        <ColorPicker color={color} setColor={setColor} />
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <SizeSetting fontSize={fontSize} setFontSize={setFontSize} />
          <Reset reset={reset}/>
        </div>
      </div>
      <div className="row">
        <Result color={color} fontSize={fontSize} />
      </div>
    </div>
  );
}

export default App;
