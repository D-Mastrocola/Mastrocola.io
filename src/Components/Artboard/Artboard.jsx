import { Component } from "react";
import React from "react";
import p5 from "p5";


class Artboard extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  initalizeArtboard(p) {
    let width = 400;
    let height = 400;
    let x = 100;
    let y = 100;
    let gridSize = width/16;

    p.setup = () => {
      p.createCanvas(400, 400);
      p.background(0)
    };

    p.draw = () => {
    };
    p.mousePressed = () => {
      console.log(p.mouseX)
      if(p.mouseX >= 0 && p.mouseX < width && p.mouseY >= 0 && p.mouseY < height) {
        let gridNode = [Math.floor(p.mouseX/gridSize),Math.floor(p.mouseY/gridSize)]
        p.fill(255)
        p.noStroke();
        p.rect(gridNode[0] * gridSize, gridNode[1] * gridSize, gridSize, gridSize)
      }
    }
  }
  componentDidMount() {
    this.myP5 = new p5(this.initalizeArtboard, this.myRef.current);
  }
  render() {
    return (
      <main className="col-12 d-flex justify-content-center flex-column align-items-center">
        <h2>Pixel Editor</h2>
        <div ref={this.myRef}></div>
        <button className="btn btn-primary">Submit</button>
      </main>
    );
  }
}
export default Artboard;
