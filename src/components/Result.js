import React from 'react';

function Result(props) {
  return (        
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <p>Color: {props.color} - FontSize: {props.fontSize}px</p>
        <div style={{color: props.color, fontSize: props.fontSize, border: `solid 1px ${props.color}`}}>
            Content
        </div>
    </div>     
  );
}

export default Result;
