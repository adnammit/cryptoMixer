import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import Mixer from './components/Mixer.jsx';
import Login from './components/Login.jsx';

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            primaryAddress: '',
            userAddresses: [],
            userAddressesStr: '',
            houseAddress: '',
            transactions: [],
            jsonObj: [],
            nextID: 1,
        }
        this.defaultState = this.state;
        this.handleChange = this.handleChange.bind(this);
        this.generateDepositAddress = this.generateDepositAddress.bind(this);
        this.generateTransaction = this.generateTransaction.bind(this);
        this.processTransactions = this.processTransactions.bind(this);
        this.onHandleTransaction = this.onHandleTransaction.bind(this);
        this.updateTransactions = this.updateTransactions.bind(this);
        this.onMixFunds = this.onMixFunds.bind(this);
        // this.onLogin = this.onLogin.bind(this);
        this.onSignup = this.onSignup.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    // Generic handle change func
    handleChange(e) {
        const name = e.target.name;
        this.setState({[name]: e.target.value});
    }

    // Find a more clever/random/secure way of generating an address
    generateDepositAddress(addressStr) {
        let parts = addressStr.split(' ');
        if(parts.length) {
            parts.push('foo');
            let houseAddress = parts.join('-');
            return houseAddress;
        }
    }

    generateTransaction(amt, to, from) {
        let transaction = {
            amount: amt,
            toAddress: to,
            fromAddress: from,
        };
        return transaction;
    }

    // Process and modify the raw json into an array that we will display
    processTransactions(jsonObj) {
        let len = jsonObj.length;
        let transactions = [];
        let nextID = this.state.nextID;
        let date;
        for (let i = 0; i < len; i++) {
            const item = JSON.parse(JSON.stringify(jsonObj[i]));
            item.id = nextID;
            // convert ISO timestamp format (2018-03-27T15:05:32.128Z) to MM/DD/YYYY
            date = new Date(item.timestamp);
            item.date = date.toLocaleDateString();
            transactions.push(item);
            nextID++;
        }

        this.setState({jsonObj: jsonObj});
        this.setState({transactions: transactions});
        this.setState({nextID: nextID});
    }

    // Currently displays all transactions - should only display transactions for user
    updateTransactions() {
        const processTransactions = this.processTransactions;
        let requestURL = 'http://jobcoin.gemini.com/commode/api/transactions';
        let request = new XMLHttpRequest();

        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function() {
            let jsonObj = request.response;
            processTransactions(jsonObj);
        }

        // // =======================================
        // // ATTEMPT TO GET TRANSACTIONS FOR GIVEN ADDRESS
        //
        // let processTransactions = this.processTransactions;
        // const url = 'http://jobcoin.gemini.com/commode/api/addresses/'+this.state.primaryAddress;
        //
        // axios.get(url, {
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        //         'Content-Type': 'Application/x-www-form-urlencoded'
        //         // 'content-type': "application/json, text/plain, */*",
        //         // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        //         // "Access-Control-Allow-Origin": "*"
        //     },
        //     crossdomain: true,
        // }).then(res => {
        //     const stuff = res.data;
        //
        // }).catch(function (error) {
        //     console.log(error);
        // });
    }

    // Send funds from one address to another
    onHandleTransaction(transaction, suppressFlag) {
        const updateTransactions = this.updateTransactions;
        let requestURL = 'http://jobcoin.gemini.com/commode/api/transactions';
        let request = new XMLHttpRequest();
        let params = 'fromAddress=' + transaction.fromAddress + '&toAddress=' + transaction.toAddress + '&amount=' + transaction.amount;

        request.open('POST', requestURL, true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.onreadystatechange = function() {
            if(request.readyState == XMLHttpRequest.DONE) {
                console.log(request.responseText);
                if (request.status == 200) {
                    // let jsonObj = request.response;
                    console.log(request.response);
                    // we may want to delay this call in certain circumstances,
                    //   such as when we are updating many transactions
                    if(!suppressFlag)
                        updateTransactions();
                }
                else {
                    if(request.status == 400) {
                        let error = request.response
                        alert('There has been an error sending your funds.');
                    }
                    else if(request.status == 422)
                        alert('You have insufficient funds to make this transaction.');
                    console.log(request.response);
                }
            }
        }
        request.send(params);
    }

    // --- funds must have already been sent to houseAddress,
    // ---   perhaps provide this as a callback
    onMixFunds(depositAmount) {
        const userAddresses = this.state.userAddresses;
        const houseAddress = this.state.houseAddress;
        const generateTransaction = this.generateTransaction;
        const onHandleTransaction = this.onHandleTransaction;
        const updateTransactions = this.updateTransactions;

        let eachDeposit = depositAmount / userAddresses.length;
        let transaction, userAddress;
        let suppressFlag = 1;

        // Watch performance on this loop...
        for (let i = 0; i < userAddresses.length; i++) {
            userAddress = userAddresses[i];
            transaction = generateTransaction(eachDeposit, userAddress, houseAddress);
            onHandleTransaction(transaction,suppressFlag);
        }
        updateTransactions();
    }

    // onLogin() {
    //     // Retrieve user addresses (can't do this until we have a persistant state)
    //     if(this.state.primaryAddress == '')
    //         alert('Please enter your JMix deposit address.');
    //     // else if(this.state.userAddresses.length == 0)
    //     //     alert("There was an error in retrieving your account information.");
    //     else {
    //         this.setState({loggedIn: true});
    //         this.updateTransactions();
    //     }
    // }

    onSignup() {
        const addressStr = this.state.userAddressesStr;
        const primaryAddress = this.state.primaryAddress;
        if(!primaryAddress)
            alert("Please enter a primary address we can withdraw funds from.");
        else if (!addressStr)
            alert("Please enter at least one address in which you would like to receive your funds.");
        else {
            let houseAddress = this.generateDepositAddress(addressStr);
            if(!houseAddress)
                alert('There was an error in generating your deposit address.');
            else {
                alert("Your JMix deposit address is \'" + houseAddress + "\'. \nDeposit funds into this address and they will be distributed to your addresses.");
                let addresses = addressStr.split(' ');
                this.setState({userAddresses: addresses});
                this.setState({loggedIn: true});
                this.setState({houseAddress: houseAddress});
                this.updateTransactions();
            }
        }
    }

    onLogout() {
        this.setState(this.defaultState);
    }

    render() {
        if(this.state.loggedIn) {
            return (
                <Mixer primaryAddress={this.state.primaryAddress} houseAddress={this.state.houseAddress} transactions={this.state.transactions}  onHandleTransaction={this.onHandleTransaction} onMixFunds={this.onMixFunds} onLogout={this.onLogout}/>
            );
        }
        else {
            return (
                <Login onChange={this.handleChange} onLogin={this.onLogin} onSignup={this.onSignup} />
            );
        }
    }
}

ReactDOM.render(<Application />, document.getElementById('container'));
