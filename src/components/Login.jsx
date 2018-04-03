import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     primaryAddress: props.primaryAddress,
        //     userAddressesStr: props.userAddressesStr,
        //     primaryDefault: props.primaryDefault,
        //     addressesDefault: props.addressesDefault,
        // }
        // this.onPrimaryChange = this.onPrimaryChange.bind(this);
        // this.onPrimaryFocus = this.onPrimaryFocus.bind(this);
        // this.onPrimaryBlur = this.onPrimaryBlur.bind(this);
        // this.onAddressesChange = this.onAddressesChange.bind(this);
        // this.onAddressesFocus = this.onAddressesFocus.bind(this);
        // this.onAddressesBlur = this.onAddressesBlur.bind(this);
    }
    //
    // // onSubmit(e) {
    // //     e.preventDefault();
    // //     let addressStr = this.state.userAddressesStr;
    // //     let
    // // }
    //
    // onPrimaryChange(e) {
    //     this.setState({primaryAddress: e.target.value});
    // }
    // onPrimaryFocus(e) {
    //     if(e.target.value == this.state.primaryDefault) {
    //         this.setState({primaryAddress: ''});
    //     }
    // }
    // onPrimaryBlur(e) {
    //     if(e.target.value == '') {
    //         this.setState({primaryAddress: this.state.primaryDefault});
    //     }
    // }
    // onAddressesChange(e) {
    //     this.setState({userAddressesStr: e.target.value});
    // }
    // onAddressesFocus(e) {
    //     if(e.target.value == this.state.addressesDefault) {
    //         this.setState({userAddressesStr: ''});
    //     }
    // }
    // onAddressesBlur(e) {
    //     if(e.target.value == '') {
    //         this.setState({userAddressesStr: this.state.addressesDefault});
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
        // return (
        //     <div className="login">
        //         <div className="container">
        //             <div className="header">
        //                 <h1>Jmix: a Jobcoin Mixer</h1>
        //             </div>
        //             <div className="section">
        //                 <h2>Deposit and Withdrawal Addresses</h2>
        //                 <p>To use JMix, we will need a primary address from which JMix will withdraw your funds.</p>
        //                 <p>We will also need two or more addresses (separated by spaces) that you own that you would like your mixed funds deposited into.</p>
        //
        //                 <form onSubmit={this.props.onSignup}>
        //                     <label>Primary Address:
        //                     <input type="text" name={'primaryAddress'} value={this.state.primaryAddress} onChange={this.onPrimaryChange} onFocus={this.onPrimaryFocus} onBlur={this.onPrimaryBlur} />
        //                     </label>
        //                     <br/>
        //                     <label>Deposit Addresses:
        //                     <input type="text" name={'userAddressesStr'} value={this.state.userAddressesStr} onChange={this.onAddressesChange} onFocus={this.onAddressesFocus} onBlur={this.onAddressesBlur}/>
        //                     </label>
        //
        //                     <input type="submit" value="Sign Up" />
        //
        //                 </form>
        //
        //             </div>
        //         </div>
        //     </div>
        // );
        // return (
        //     <div className="login">
        //         <div className="container">
        //             <div className="header">
        //                 <h1>Jmix: a Jobcoin Mixer</h1>
        //             </div>
        //             <div className="section">
        //                 <h2>Existing user?</h2>
        //                 <p>Enter your JMix deposit address:</p>
        //                 <form onSubmit={this.props.onLogin}>
        //                     <input type="text" name={'primaryAddress'} onChange={this.props.onChange} value={this.props.primaryAddress}/>
        //                     <input type="submit" value="Sign In" />
        //                 </form>
        //             </div>
        //             <div className="section">
        //                 <h2>Don't have a JMix address?</h2>
        //                 <p> Signing up is easy! Just enter several withdrawal addresses that you own and we'll generate a deposit link for you.</p>
        //                 <p>Enter one or more addresses separated by spaces:</p>
        //                 <form onSubmit={this.props.onSignup}>
        //                     <input type="text" name={'userAddressesStr'} onChange={this.props.onChange} value={this.props.userAddressesStr}/>
        //                     <input type="submit" value="Sign Up" />
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // );
    }
}
// Login.defaultProps = {
//     primaryAddress: 'Primary Address',
//     userAddressesStr: 'Send Funds to these Addresses',
//     primaryDefault: 'Primary Address',
//     addressesDefault: 'Send Funds to these Addresses',
// };

export default Login;
