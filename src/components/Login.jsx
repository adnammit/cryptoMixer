import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     // addressStr: '',
        //     // depositStr: '',
        // }
        // this.onSignIn = this.onSignIn.bind(this);
        // this.onSignUp = this.onSignUp.bind(this);
        // this.onDepositChange = this.onDepositChange.bind(this);
        // // this.onDepositFocus = this.onDepositFocus.bind(this);
        // // this.onDepositBlur = this.onDepositBlur.bind(this);
        // this.onUserAddressesChange = this.onUserAddressesChange.bind(this);
        // this.onUserAddressesFocus = this.onUserAddressesFocus.bind(this);
        // this.onUserAddressesBlur = this.onUserAddressesBlur.bind(this);
    }
    // onSignIn(e) {
    //     e.preventDefault();
    //     var value = e.target.value;
    //
    //     // //// do some checking do see if address exists
    //     // if(!deposit)
    //     // else if(!validAddress)
    //     // else...
    //     // if(e.target.value) {
    //     //     this.setState({loggedIn: true});
    //     //     this.setState({depositAddress: e.target.value});
    //     //     this.props.onLogin(true,this.state.depositAddress);
    //     if(this.state.depositAddress) {
    //         this.setState({loggedIn: true});
    //         this.props.onLogin(true,this.state.depositAddress);
    //     }
    //     else
    //         alert('Please enter your JMix deposit address.');
    // }

    // onSignUp(e) {
    //     e.preventDefault();
    //
    //     // //// do some checking do see if address exists
    //     // if(!deposit)
    //     // else if(!validAddress)
    //     // else...
    //
    //     var addressStr = this.state.addressStr;
    //     var addresses = addressStr.split(' ');
    //     if(addresses.length == 0) {
    //         alert("Please enter at least one address in which you would like to receive your deposits");
    //     }
    //     else {
    //         //generate deposit address
    //         var depositAddress = 'foo';
    //         alert("Your JMix deposit address is \'" + depositAddress + "\'. \nDeposit funds into this address and they will be distributed to your addresses.")
    //         this.setState({userAddresses: addresses});
    //         this.setState({depositAddress: depositAddress});
    //         this.setState({loggedIn: true});
    //         this.props.onLogin(true,this.state.depositAddress,this.state.userAddresses); // is arg necessary?
    //     }
    // }

    // onDepositChange(e) {
    //     if(e.target.value)
    //         this.setState({depositAddress: e.target.value});
    // }
    // onDepositChange(e) {
    //     if(e.target.value != this.state.defaultDepositValue)
    //         this.setState({depositAddress: e.target.value});
    // }
    // onDepositFocus(e) {
    //     if(e.target.value != this.state.defaultDepositValue) {
    //         this.setState({depositAddress: ''});
    //     }
    // }
    // onDepositBlur(e) {
    //     if(e.target.value == '') {
    //         // this.setState({depositAddress: 'Your JMix Address'});
    //         e.target.value ==
    //     }
    // }
    // onUserAddressesChange(e) {
    //     if(e.target.value)
    //         this.setState({addressStr: e.target.value});
    // }
    // onUserAddressesFocus(e) {
    //     if(e.target.value == 'Enter addresses separated by spaces') {
    //         this.setState({userAddresses: ''});
    //     }
    // }
    // onUserAddressesBlur(e) {
    //     if(e.target.value == '') {
    //         this.setState({userAddresses: 'Enter addresses separated by spaces'});
    //     }
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
                        <form onSubmit={this.props.onLogin}>
                            <input type="text" name={'depositAddress'} onChange={this.props.onChange} value={this.props.depositAddress}/>
                            <input type="submit" value="Sign In" />
                        </form>
                    </div>
                    <div className="section">
                        <h1>Don't have a JMix address?</h1>
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
// Login.defaultProps = {
//     onChange: PropTypes.func.isRequired,
//     onLogin: PropTypes.func.isRequired,
//     loggedIn: PropTypes.bool.isRequired,
//     // userAddresses: PropTypes.string.isRequired,
//     // defa
// };

export default Login;
