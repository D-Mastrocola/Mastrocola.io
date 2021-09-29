import { Component } from "react";
import MyAlgo from "@randlabs/myalgo-connect";

const myAlgoWallet = new MyAlgo();

const { MyAlgoWallet } = require("@randlabs/myalgo-connect");

const algosdk = require("algosdk");

const token = {
  "X-API-Key": "dNKutsYJR97M3WUuTeDMJ4EmYJpR1UhI1UhAi4Uo",
};
const server = "https://testnet-algorand.api.purestake.io/ps2";
const port = "";

const algodClient = new algosdk.Algodv2(token, server, port);

let secretKey =
  "rally umbrella garlic shiver medal embrace regret foam reject select custom dress just crazy benefit announce busy unable cereal head valve educate ride absorb regret";
let recoveredAccount = algosdk.mnemonicToSecretKey(secretKey);

let account_info = "";
let acct_string = "";

/*(async () => {
  account_info =
    acct_string = JSON.stringify(account_info);
  console.log("Account Info: " + acct_string);

  this.setState({ account_info: (await algodClient.accountInformation(recoveredAccount.addr).do()) })
})().catch(e => {
  console.log(e)
});*/

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: "Register",
    };
  }
  connectWallet() {
    console.log("connect");
    let getAPIResponse = async() => {
      try {
        const accounts = await myAlgoWallet.connect();

        const addresses = accounts.map((account) => account.address);
        console.log(addresses)
        this.setState({
          connected: addresses[0]
        })
      } catch (err) {
        console.error(err);
      }
    };
    getAPIResponse();
  }
  render() {
    return (
      <header className="bg-dark text-light col-12 d-flex justify-content-between align-items-center border border-2 border-secondary border-top-0 border-start-0 border-end-0 ">
        <h1>Mastrocola.io</h1>
        <button
          className="btn btn-warning fs-5"
          onClick={() => this.connectWallet()}
        >
          {this.state.connected}
        </button>
      </header>
    );
  }
}
export default Header;
