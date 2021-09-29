import { Component } from "react";

class Artboard extends Component {
  constructor(props) {
    super(props)
  }
  initalizeArtboard() {
      console.log('load artboard')
  }
  componentDidMount() {
    this.initalizeArtboard();
  }
  render() {
    return(
      <main className="col-12 d-flex justify-content-center flex-column align-items-center">
        <h2>Pixel Editor</h2>
        <canvas id='artboard-canvas'></canvas>
        <button className='btn btn-primary'>Submit</button>
      </main>
    )
  }
}
export default Artboard;