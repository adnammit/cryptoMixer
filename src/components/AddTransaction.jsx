import React from 'react';
import PropTypes from 'prop-types';

class AddTransaction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            depositAddress: props.depositAddress,
            amount: props.amount,
            toAddress: props.toAddress,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onAmountFocus = this.onAmountFocus.bind(this);
        this.onAmountBlur = this.onAmountBlur.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();

        var transaction = {
            amount: this.state.amount,
            toAddress: this.state.toAddress,
            fromAddress: this.state.depositAddress,
        };

        this.props.addTransaction(transaction);
    }
    onAmountChange(e) {
        // var amt = parseInt(e.target.value);
        var val = e.target.value;
        if(val != 'Enter Amount') {
            if(isNaN(val))
                alert("Please enter a numerical value.");
            else
                this.setState({amount: e.target.value});
        }
    }
    onAmountFocus(e) {
        if(e.target.value == 'Enter Amount') {
            this.setState({amount: ''});
        }
    }
    onAmountBlur(e) {
        if(e.target.value == '') {
            this.setState({amount: 'Enter Amount'});
        }
    }
    onAddressChange(e) {
        this.setState({toAddress: e.target.value});
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
                <div className="container">
                    <h1>Send Jobcoin</h1>
                    <p>Enter a destination address and amount:</p>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" value={this.state.toAddress} onChange={this.onAddressChange} />
                        <input type="text" value={this.state.amount} onChange={this.onAmountChange} onFocus={this.onAmountFocus} onBlur={this.onAmountBlur} />
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        );
    }
}
AddTransaction.defaultProps = {
    amount: 'Enter Amount',
    toAddress: 'Enter Recipient Address',
    // onUpdate: PropTypes.func.isRequired,
};
// AddTransaction.propTypes = {
//     // depositAddress: PropTypes.string.isRequired,
//     addTransaction: PropTypes.func.isRequired,
//     // updateTransactions: PropTypes.func.isRequired,
// };

export default AddTransaction;
