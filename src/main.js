import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Mixer from './components/Mixer.jsx';
import Login from './components/Login.jsx';

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: props.loggedIn,
            depositAddress: props.depositAddress,
            userAddresses: props.userAddresses,
            userAddressesStr: props.userAddressesStr,
            transactions: props.transactions,
            jsonObj: props.jsonObj,
            nextID: props.nextID,
        }
        this.handleChange = this.handleChange.bind(this);
        this.generateDepositAddress = this.generateDepositAddress.bind(this);
        this.processTransactions = this.processTransactions.bind(this);
        this.updateTransactions = this.updateTransactions.bind(this);
        this.onAddTransaction = this.onAddTransaction.bind(this);
        this.onAddFunds = this.onAddFunds.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onSignup = this.onSignup.bind(this);
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
            let depositAddress = parts.join('-');
            return depositAddress;
        }
    }

    processTransactions(jsonObj) {
        let len = jsonObj.length;
        let transactions = [];
        let nextID = this.props.nextID;
        let date;
        for (var i = 0; i < len; i++) {
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

    updateTransactions() {
        var processTransactions = this.processTransactions;
        var requestURL = 'http://jobcoin.gemini.com/commode/api/transactions';
        var request = new XMLHttpRequest();

        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function() {
            var jsonObj = request.response;
            processTransactions(jsonObj);
        }
    }

    onAddTransaction(transaction) {
        if(transaction)
            console.log('yay!');

        var updateTransactions = this.updateTransactions;
        var requestURL = 'http://jobcoin.gemini.com/commode/api/transactions';
        var request = new XMLHttpRequest();
        var params = 'fromAddress=' + transaction.fromAddress + '&toAddress=' + transaction.toAddress + '&amount=' + transaction.amount;

        request.open('POST', requestURL, true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // request.setRequestHeader();

        request.onreadystatechange = function() {
            if(request.readyState == XMLHttpRequest.DONE) {
                // var jsonObj = request.response;
                console.log(request.responseText);
                if (request.status == 200)
                updateTransactions(jsonObj);
                else {
                    if(request.status == 400)
                    alert('There has been an error sending your funds:\n' + request.responseText);
                    else if(request.status == 422)
                    alert('You have insufficient funds to make this transaction.');
                }
            }
        }
        request.send(params);
    }

    onAddFunds(transaction) {
        var updateTransactions = this.updateTransactions;
        var requestURL = 'http://jobcoin.gemini.com/commode/api/transactions';
        var request = new XMLHttpRequest();
        var params = 'toAddress=' + transaction + '&amount=' + transaction.amount;

        request.open('POST', requestURL, true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // request.setRequestHeader();

        request.onreadystatechange = function() {
            if(request.readyState == XMLHttpRequest.DONE) {
                // var jsonObj = request.response;
                console.log(request.responseText);
                if (request.status == 200)
                updateTransactions(jsonObj);
                else {
                    if(request.status == 400)
                    alert('There has been an error sending your funds:\n' + request.responseText);
                    else if(request.status == 422)
                    alert('You have insufficient funds to make this transaction.');
                }
            }
        }
        request.send(params);
    }

    onLogin() {
        // Retrieve user addresses (can't do this until we have a persistant state)
        if(this.state.depositAddress == '')
            alert('Please enter your JMix deposit address.');
        // else if(this.state.userAddresses.length == 0)
        //     alert("There was an error in retrieving your account information.");
        else {
            this.setState({loggedIn: true});
            this.updateTransactions();
        }
    }

    onSignup() {
        const addressStr = this.state.userAddressesStr;

        if (!addressStr)
            alert("Please enter at least one address in which you would like to receive your funds.");
        else {
            let depositAddress = this.generateDepositAddress(addressStr);
            if(!depositAddress)
                alert('There was an error in generating your deposit address.');
            else {
                this.setState({loggedIn: true});
                this.setState({depositAddress: depositAddress});
                this.updateTransactions();
            }
        }
    }

    render() {
        if(this.state.loggedIn) {
            return (
                <Mixer depositAddress={this.state.depositAddress} transactions={this.state.transactions}  onAddTransaction={this.onAddTransaction} onAddFunds={this.onAddFunds}/>
            );
        }
        else {
            return (
                <Login onChange={this.handleChange} onLogin={this.onLogin} onSignup={this.onSignup} />
            );
        }
    }
}
Application.defaultProps = {
    loggedIn: false,
    depositAddress: '',
    userAddresses: [],
    userAddressesStr: '',
    transactions: [],
    jsonObj: [],
    nextID: 1,
};

ReactDOM.render(<Application />, document.getElementById('container'));
