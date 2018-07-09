import React from 'react';
import PropTypes from 'prop-types';

class AddFunds extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: props.amount,
            defaultAmount: props.defaultAmount,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onAmountFocus = this.onAmountFocus.bind(this);
        this.onAmountBlur = this.onAmountBlur.bind(this);
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

    render() {
        return (
            <div className="add-transaction">
                <h2>Mix Coin</h2>
                <p>Send Coin from [{this.props.primaryAddress}] to JMix be deposited into your withdrawal addresses:</p>
                <form onSubmit={this.onSubmit}>

                    <input type="text" value={this.state.amount} onChange={this.onAmountChange} onFocus={this.onAmountFocus} onBlur={this.onAmountBlur} />

                    <input className="add-button" type="submit" value="Send" />
                </form>
            </div>
        );
    }
}
AddFunds.defaultProps = {
    amount: '$0',
    defaultAmount: '$0',
};

export default AddFunds;
