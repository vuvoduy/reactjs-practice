import React from 'react';

function SizeSetting() {
  return (        
    <div className="panel panel-primary">
          <div className="panel-heading">
                <h3 className="panel-title">FontSize: 13px</h3>
          </div>
          <div className="panel-body">                
                <button type="button" className="btn btn-success">+</button>                
                <button type="button" className="btn btn-danger">-</button>  
          </div>
    </div>      
  );
}

export default SizeSetting;
