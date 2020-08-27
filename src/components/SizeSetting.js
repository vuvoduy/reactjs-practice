import React from 'react';

function SizeSetting(props) {
  return (        
    <div className="panel panel-primary">
          <div className="panel-heading">
                <h3 className="panel-title">FontSize: {props.fontSize}px</h3>
          </div>
          <div className="panel-body">                
                <button type="button" className="btn btn-success" onClick={() => props.setFontSize(Math.max(props.fontSize - 1, 0))}>-</button>                
                <button type="button" className="btn btn-danger" onClick={() => props.setFontSize(Math.min(props.fontSize + 1, 50))}>+</button>  
                <input type='range' min='0' max='50' value={props.fontSize} onChange={(e) => props.setFontSize(parseInt(e.target.value))}/>
          </div>
    </div>      
  );
}

export default SizeSetting;
