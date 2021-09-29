import { Component } from "react";
import React from "react";
import p5 from "p5";


class Artboard extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  initalizeArtboard(p) {
    let x = 100;
    let y = 100;

    p.setup = () => {
      p.createCanvas(400, 400);
    };

    p.draw = () => {
      p.background(0);
      p.fill(255);
      p.rect(x, y, 50, 50);
    };
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
