import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: props.loggedIn,
            depositAddress: props.depositAddress,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onDepositChange = this.onDepositChange.bind(this);
        this.onDepositFocus = this.onDepositFocus.bind(this);
        this.onDepositBlur = this.onDepositBlur.bind(this);

    }
    onSubmit(e) {
        e.preventDefault();

        // //// do some checking do see if address exists
        // if(!deposit)
        // else if(!validAddress)
        // else...

        this.setState({loggedIn: true});
        this.setState({depositAddress: e.target.value});
        this.props.onLogin(true,this.state.depositAddress);
        // this.props.onLogin(this.state.loggedIn,this.state.depositAddress);
    }
    onDepositChange(e) {
        this.setState({depositAddress: e.target.value});
    }
    onDepositFocus(e) {
        if(e.target.value == 'Your JMix Address') {
            this.setState({depositAddress: ''});
        }
    }
    onDepositBlur(e) {
        if(e.target.value == '') {
            this.setState({depositAddress: 'Your JMix Address'});
        }
    }
    // onCreateNew(e) {
    //
    // }

    render() {
        return (
            <div className="login">
                <div className="container">
                    <div className="header">
                        <h1>Jmix: a Jobcoin Mixer</h1>
                    </div>
                    <div className="section">
                        <h1>Existing user?</h1>
                        <p>Enter your JMix deposit address:</p>
                        <form onSubmit={this.onSubmit}>
                            <input type="text" onChange={this.onDepositChange} value={this.state.depositAddress}/>
                            <input type="submit" value="Sign In" />
                        </form>
                    </div>
                    <div className="section">
                        <h1>Don't have a JMix address?</h1>
                        <p> Signing up is easy! Just enter several withdrawal addresses that you own and we'll generate a deposit link for you.</p>
                        <form onSubmit={this.onSignUp}>

                        </form>

                    </div>
                </div>
            </div>
        );
    }
}
Login.defaultProps = {
    onLogin: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
};

export default Login;
