import React, { useState } from 'react';

function ColorPicker(props) {
      const colors = ['red', 'green', 'blue', 'yellow'];
      const elementColors = colors.map((color, index) =>
            <span
                  key={index}
                  className={props.color === color ? 'color-picker active' : 'color-picker'}
                  style={{ backgroundColor: color }}
                  onClick={() => props.setColor(color)}>
                  {color}
            </span>
      );      
      return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="panel panel-primary">
                        <div className="panel-heading">
                              <h3 className="panel-title">Color Picker: {props.color}</h3>
                        </div>
                        <div className="panel-body">
                              {elementColors}                              
                        </div>
                  </div>
            </div>
      );
}

export default ColorPicker;
