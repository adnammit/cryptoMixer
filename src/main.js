import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Mixer from './components/Mixer';
import Login from './components/Login.jsx';

var TRANSACTIONS = [
    {
        "timestamp": "2014-04-22T13:10:01.210Z",
        "toAddress": "BobsAddress",
        "amount": "50.35",
        id: 1
    },
    {
        "timestamp": "2014-04-23T18:25:43.511Z",
        "fromAddress": "BobsAddress",
        "toAddress": "AlicesAddress",
        "amount": "30.1",
        id: 2
    }
];

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: props.loggedIn
        }
        this.onLogin = this.onLogin.bind(this);
    }

    onLogin(loggedIn, depositAddress) {
        this.setState({loggedIn: loggedIn});
        this.setState({depositAddress: depositAddress});
    }

    render() {
        if(!this.state.loggedIn) {
            return (
                <Login onLogin={this.onLogin} loggedIn={this.state.loggedIn}/>
            );
        }
        else {
            return (
                <Mixer initialItems={TRANSACTIONS} title="My Jobcoin Mixer"/>
            );
        }
    }
}
Application.defaultProps = {
    loggedIn: false
};

ReactDOM.render(<Application />, document.getElementById('container'));
