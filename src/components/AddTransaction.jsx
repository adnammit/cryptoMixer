import React from 'react';
import PropTypes from 'prop-types';

class AddTransaction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: props.amount,
            toAddress: props.toAddress,
            defaultAmount: props.defaultAmount,
            defaultAddress: props.defaultAddress,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onAmountFocus = this.onAmountFocus.bind(this);
        this.onAmountBlur = this.onAmountBlur.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onAddressFocus = this.onAddressFocus.bind(this);
        this.onAddressBlur = this.onAddressBlur.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();

        let transaction = {
            amount: this.state.amount,
            toAddress: this.state.toAddress,
            fromAddress: this.props.depositAddress,
        };

        this.props.onHandleTransaction(transaction);
    }
    onAmountChange(e) {
        // var amt = parseInt(e.target.value);
        let val = e.target.value;
        if(val) {

            if (/\b\$+/.test(val))
                val = val.substring(1);
                // if (val.substring(0,1) == '$')
                //     val = val.substring(1);
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
    onAddressChange(e) {
        this.setState({toAddress: e.target.value});
    }
    onAddressFocus(e) {
        if(e.target.value == this.state.defaultAddress) {
            this.setState({toAddress: ''});
        }
    }
    onAddressBlur(e) {
        if(e.target.value == '') {
            this.setState({toAddress: this.state.defaultAddress});
        }
    }
    // onAddressFocus(e) {
    //     if(e.target.value == 'Your JMix Address') {
    //         this.setState({depositAddress: ''});
    //     }
    // }
    // onAddressBlur(e) {
    //     if(e.target.value == '') {
    //         this.setState({depositAddress: 'Your JMix Address'});
    //     }
    // }

    render() {
        return (
            <div className="add-transaction">
                <h2>Send Jobcoin</h2>
                <p>Enter a destination address and amount to send from your account:</p>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.toAddress} onChange={this.onAddressChange} onFocus={this.onAddressFocus} onBlur={this.onAddressBlur}/>
                    <input type="text" value={this.state.amount} onChange={this.onAmountChange} onFocus={this.onAmountFocus} onBlur={this.onAmountBlur} />
                    <input type="submit" value="Send" />
                </form>
            </div>
        );
    }
}
AddTransaction.defaultProps = {
    amount: '$0',
    toAddress: 'Send to Address',
    defaultAmount: '$0',
    defaultAddress: 'Send to Address',
};

export default AddTransaction;
