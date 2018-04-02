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
            transactions: props.transactions,
            jsonObj: props.jsonObj,
            nextID: props.nextID,
        }
        this.onLogin = this.onLogin.bind(this);
        this.state.processTransactions = this.processTransactions.bind(this);
        this.state.updateTransactions = this.updateTransactions.bind(this);
    }

    processTransactions(jsonObj) {
        var len = jsonObj.length;
        var transactions = [];
        var nextID = this.props.nextID;
        var item;
        for (var i = 0; i < len; i++) {
            item = JSON.parse(JSON.stringify(jsonObj[i]));
            item.id = nextID;
            transactions.push(item);
            nextID++;
        }

        this.setState({jsonObj: jsonObj});
        this.setState({transactions: transactions});
        this.setState({nextID: nextID});
    }

    updateTransactions() {
        var processTransactions = this.state.processTransactions;
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

    onLogin(loggedIn, depositAddress) {
        this.setState({loggedIn: loggedIn});
        this.setState({depositAddress: depositAddress});
        this.state.updateTransactions();
    }

    render() {
        if(this.state.loggedIn) {
            return (
                <Mixer depositAddress={this.state.depositAddress} transactions={this.state.transactions} onUpdate={this.updateTransactions.bind(this)} />
            );
        }
        else {
            return (
                <Login onLogin={this.onLogin} loggedIn={this.state.loggedIn}/>
            );
        }
    }
}
Application.defaultProps = {
    loggedIn: false,
    depositAddress: '',
    transactions: [],
    jsonObj: [],
    nextID: 1,
};

ReactDOM.render(<Application />, document.getElementById('container'));
