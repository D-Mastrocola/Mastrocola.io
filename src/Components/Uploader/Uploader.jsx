import React, { Component } from "react";

class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
        uploadedFile: null
    }
  }
  onFileChange(event) {
    console.log(event);
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  }
  render() {
    return (
      <main className="container d-flex flex-column justify-content-center align-items-center">
        <div className="border border-2 border-dark p-4 text-center">
          <h1>Upload Image</h1>
          <input type="file" onChange={this.onFileChange} />
        </div>
      </main>
    );
  }
}

export default Uploader;
