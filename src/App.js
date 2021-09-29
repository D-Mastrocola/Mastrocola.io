import './App.css';
import { Component } from 'react';
import Header from './Components/Header/Header.jsx';
import algorandLogo from './algorand-algo-logo.svg';



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
      </>
    );
  }

}

export default App;
