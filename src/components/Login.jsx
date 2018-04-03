import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login">
                <div className="container">
                    <div className="header">
                        <h1>Jmix: a Jobcoin Mixer</h1>
                    </div>
                    <div className="section">
                        <h2>Existing user?</h2>
                        <p>Enter your JMix deposit address:</p>
                        <form onSubmit={this.props.onLogin}>
                            <input type="text" name={'depositAddress'} onChange={this.props.onChange} value={this.props.depositAddress}/>
                            <input type="submit" value="Sign In" />
                        </form>
                    </div>
                    <div className="section">
                        <h2>Don't have a JMix address?</h2>
                        <p> Signing up is easy! Just enter several withdrawal addresses that you own and we'll generate a deposit link for you.</p>
                        <p>Enter one or more addresses separated by spaces:</p>
                        <form onSubmit={this.props.onSignup}>
                            <input type="text" name={'userAddressesStr'} onChange={this.props.onChange} value={this.props.userAddressesStr}/>
                            <input type="submit" value="Sign Up" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
