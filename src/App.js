import './App.css';
import { Component } from 'react';
import Header from './Components/Header/Header.jsx';
import Artboard from './Components/Artboard/Artboard.jsx';
import algorandLogo from './assets/images/algorand-algo-logo.svg';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account_info: ''
    };
  }
  render() {
    return (
      <>
        <Header />
        <Artboard />
      </>
    );
  }

}

export default App;
