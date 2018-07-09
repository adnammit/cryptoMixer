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
                        <h1>Jmix: a Coin Mixer</h1>
                    </div>
                    <div className="section">
                        <h2>Deposit and Withdrawal Addresses</h2>
                        <p>To use JMix, we will need a primary address from which JMix will withdraw your funds.</p>
                        <p>We will also need two or more addresses (separated by spaces) that you own that you would like your mixed funds deposited into.</p>

                        <form onSubmit={this.props.onSignup}>

                            <label>Primary Address:
                                <input type="text" name={'primaryAddress'} value={this.props.primaryAddress} onChange={this.props.onChange} />
                            </label>

                            <br/>

                            <label>Deposit Addresses:
                                <input type="text" name={'userAddressesStr'} value={this.props.userAddressesStr} onChange={this.props.onChange} />
                            </label>

                            <input type="submit" value="Sign Up" />

                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
