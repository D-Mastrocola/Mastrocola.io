import './App.css';
import algorandLogo from './algorand-algo-logo.svg';
import MyAlgo from '@randlabs/myalgo-connect';
import algosdk from "algosdk";


const { MyAlgoWallet } = require('@randlabs/myalgo-connect');



const myAlgoWallet = new MyAlgo();

const algodClient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');


myAlgoWallet.connect()
  .then((accounts) => {
    let txn = {
      fee: 1000,
      type: 'pay',
      from: accounts[0].address,
      to: '4SZTEUQIURTRT37FCI3TRMHSYT5IKLUPXUI7GWC5DZFXN2DGTATFJY5ABY',
      amount: 1000000, // 1 algo
      firstRound: 12449335,
      lastRound: 12450335,
      genesisHash: "SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=",
      genesisID: "testnet-v1.0"
    };

    myAlgoWallet.signTransaction(txn)
      .then((signedTxn) => {
        console.log(signedTxn);

        algodClient.sendRawTransaction(signedTxn.blob).do()
          .then((txn) => {
            console.log(txn);
            // { txId: "IMXOKHFRXGJUBDNOHYB5H6HASYACQ3PE5R6VFWLW4QHARFWLTVTQ" }
          })
      })
      .catch((err) => {
        // Error
      });

  })
  .catch((err) => {
    // Error
  });






function App() {
  return (
    <div className="App bg-dark text-light col-12 h-100 d-flex justify-content-center align-items-center">
      <div className='container'>
        <div className='d-flex row'>
          <h1>Welcome to Mastrocola.io</h1>
          <div>
            <button className='btn btn-primary m-1'>Explore</button>
            <button className='btn btn-primary m-1'>Create</button>
            <button className='btn btn-primary m-1'>Profile</button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
