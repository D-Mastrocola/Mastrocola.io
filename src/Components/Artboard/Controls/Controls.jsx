import { Component } from "react";
import React from "react";
import p5, { Color } from "p5";

class Controls extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h3>Controls</h3>
        <ul>
          <li>
            <ul>
              <li>Pen</li>
              <li>Eraser</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>Square</li>
              <li>Circle</li>
            </ul>
          </li>
          <li>
            <input
              type="range"
              min="1"
              max="100"
              value="25"
              class="slider"
              id="brush-size"
            />
          </li>
          <li>
            <input type="color" id="color-picker" value="#ff0000" />
          </li>
        </ul>
      </>
    );
  }
}
export default Controls;
