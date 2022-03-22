import { Component } from "react";
import React from "react";
import p5, { Color } from "p5";

class Artboard extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      penType: "squarePen",
      penSize: 4,
      penColor: [0, 0, 0],
    };
  }
  initalizeArtboard(p) {
    console.log(p);
    let width = 400;
    let height = 400;
    let mouseIsDown = false;
    let gridSize = width / 16;

    let drawBackgroundLayer = () => {
      let color = [p.color(255), p.color(150, 150, 150)];
      p.noStroke();
      let colorSwitch = 0;
      for (let x = 0; x * gridSize < width; x++) {
        for (let y = 0; y * gridSize < height; y++) {
          //even number
          if (colorSwitch % 2 === 0) {
            p.fill(color[0]);
          } else {
            p.fill(color[1]);
          }
          p.rect(x * gridSize, y * gridSize, gridSize, gridSize);
          colorSwitch++;
        }
        colorSwitch++;
      }
    };
    p.setup = () => {
      p.createCanvas(400, 400);
      drawBackgroundLayer();
      //p.background(255);
    };

    p.draw = () => {};
    let drawPixel = (x, y) => {
      let drawSize = this.state.penSize * gridSize;
      p.fill(...this.state.penColor);
      p.noStroke();
      p.rect(
        x * gridSize - (drawSize - gridSize) / 2,
        y * gridSize - (drawSize - gridSize) / 2,
        drawSize,
        drawSize
      );
    };
    p.mouseDragged = () => {
      if (!mouseIsDown) return;
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
    };
  }
  componentDidMount() {
    this.myP5 = new p5(this.initalizeArtboard.bind(this), this.myRef.current);
  }
  render() {
    return (
      <main className="col-12 bg-secondary d-flex justify-content-center flex-column align-items-center">
        <h2>Pixel Editor</h2>
        <div ref={this.myRef}></div>
        <button className="btn btn-primary">Submit</button>
      </main>
    );
  }
}
export default Artboard;
