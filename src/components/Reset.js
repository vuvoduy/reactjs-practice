import React from 'react';

function Reset(props) {
  return (          
          <button type="button" className="btn btn-danger" onClick={() => props.reset()}>Reset</button> 
  );
}

export default Reset;
