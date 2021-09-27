//r
import './App.css';
import algorandLogo from './algorand-algo-logo.svg';
import MyAlgo from '@randlabs/myalgo-connect';



const { MyAlgoWallet } = require('@randlabs/myalgo-connect');


const algosdk = require('algosdk');

const token = {
  'X-API-Key': 'dNKutsYJR97M3WUuTeDMJ4EmYJpR1UhI1UhAi4Uo'
};
const server = 'https://testnet-algorand.api.purestake.io/ps2';
const port = "";

const algodClient = new algosdk.Algodv2(token, server, port);

let secretKey = 'rally umbrella garlic shiver medal embrace regret foam reject select custom dress just crazy benefit announce busy unable cereal head valve educate ride absorb regret';
let recoveredAccount = algosdk.mnemonicToSecretKey(secretKey);

let account_info = '';
let acct_string = '';

(async () => {
  account_info = (await algodClient.accountInformation(recoveredAccount.addr).do());
  acct_string = JSON.stringify(account_info);
  console.log("Account Info: " + acct_string);
})().catch(e => {
  console.log(e)
});


function App() {
  return (
    <div className="App bg-dark text-light col-12 h-100 d-flex justify-content-center align-items-center">
      <div className='container'>
        <div className='d-flex row'>
          <h1>Welcome to Mastrocola.io</h1>
          <p>Account Address: {account_info.address}</p>
        </div>

      </div>

    </div>
  );
}

export default App;
