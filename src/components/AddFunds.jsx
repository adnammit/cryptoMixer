import React from 'react';
import PropTypes from 'prop-types';

class AddFunds extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: props.amount,
            // fromAddress: props.fromAddress,
            defaultAmount: props.defaultAmount,
            // defaultAddress: props.defaultAddress,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onAmountFocus = this.onAmountFocus.bind(this);
        this.onAmountBlur = this.onAmountBlur.bind(this);
        // this.onAddressChange = this.onAddressChange.bind(this);
        // this.onAddressFocus = this.onAddressFocus.bind(this);
        // this.onAddressBlur = this.onAddressBlur.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();

        let transaction = {
            amount: this.state.amount,
            toAddress: this.props.houseAddress,
            fromAddress: this.props.primaryAddress,
        };

        this.props.onHandleTransaction(transaction);
        this.props.onMixFunds(this.state.amount);
    }
    onAmountChange(e) {
        let val = e.target.value;
        if(val) {

            if (/\b\$+/.test(val))
                val = val.substring(1);
            if(isNaN(val)) {
                this.setState({amount: this.state.defaultAmount});
                alert("Please enter a numerical value.");
            }
            else
                this.setState({amount: e.target.value});
        }
    }
    onAmountFocus(e) {
        if(e.target.value == this.state.defaultAmount) {
            this.setState({amount: ''});
        }
    }
    onAmountBlur(e) {
        if(e.target.value == '') {
            this.setState({amount: this.state.defaultAmount});
        }
    }
    // onAddressChange(e) {
    //     this.setState({fromAddress: e.target.value});
    // }
    // onAddressFocus(e) {
    //     if(e.target.value == this.state.defaultAddress) {
    //         this.setState({fromAddress: ''});
    //     }
    // }
    // onAddressBlur(e) {
    //     if(e.target.value == '') {
    //         this.setState({fromAddress: this.state.defaultAddress});
    //     }
    // }

    render() {
        return (
            <div className="add-transaction">
                <h2>Mix Jobcoin</h2>
                <p>Send Jobcoin from [{this.props.primaryAddress}] to JMix be deposited into your withdrawal addresses:</p>
                <form onSubmit={this.onSubmit}>
                    {/*
                    <input type="text" value={this.state.fromAddress} onChange={this.onAddressChange} onFocus={this.onAddressFocus} onBlur={this.onAddressBlur}/>
                    */}

                    <input type="text" value={this.state.amount} onChange={this.onAmountChange} onFocus={this.onAmountFocus} onBlur={this.onAmountBlur} />

                    <input className="add-button" type="submit" value="Send" />
                </form>
            </div>
        );
    }
}
AddFunds.defaultProps = {
    amount: '$0',
    // fromAddress: 'Withdraw from Account',
    defaultAmount: '$0',
    // defaultAddress: 'Withdraw from Account',
};

export default AddFunds;
