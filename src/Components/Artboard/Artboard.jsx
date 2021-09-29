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
    let mouseIsDown = false;
    let gridSize = width / 16;

    p.setup = () => {
      p.createCanvas(400, 400);
      p.background(255);
    };

    p.draw = () => {};
    let drawPixel = (x, y) => {
      p.fill(0);
      p.noStroke();
      p.rect(x * gridSize, y * gridSize, gridSize, gridSize);
    };
    p.mouseDragged = () => {
      if(!mouseIsDown) return;
      if (
        p.mouseX >= 0 &&
        p.mouseX < width &&
        p.mouseY >= 0 &&
        p.mouseY < height
      ) {
        let gridNode = [
          Math.floor(p.mouseX / gridSize),
          Math.floor(p.mouseY / gridSize),
        ];
        p.fill(0);
        p.noStroke();
        drawPixel(gridNode[0], gridNode[1]);
      }
    };
    p.mousePressed = () => {
      mouseIsDown = true;
      if (
        p.mouseX >= 0 &&
        p.mouseX < width &&
        p.mouseY >= 0 &&
        p.mouseY < height
      ) {
        let gridNode = [
          Math.floor(p.mouseX / gridSize),
          Math.floor(p.mouseY / gridSize),
        ];
        p.fill(0);
        p.noStroke();
        drawPixel(gridNode[0], gridNode[1]);
      }
    };
    p.mouseReleased = () => {
      mouseIsDown = false;
    }
  }
  componentDidMount() {
    this.myP5 = new p5(this.initalizeArtboard, this.myRef.current);
  }
  render() {
    return (
      <main className="col-12 d-flex justify-content-center flex-column align-items-center">
        <h2>Pixel Editor</h2>
        <div className="border border-2 border-dark" ref={this.myRef}></div>
        <button className="btn btn-primary">Submit</button>
      </main>
    );
  }
}
export default Artboard;
