import React from 'react';
import PropTypes from 'prop-types';

class AddFunds extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // depositAddress: props.depositAddress,
            amount: props.amount,
            // toAddress: props.toAddress,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        // this.onAmountFocus = this.onAmountFocus.bind(this);
        // this.onAmountBlur = this.onAmountBlur.bind(this);
        // this.onAddressChange = this.onAddressChange.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();

        var transaction = {
            amount: this.state.amount,
            toAddress: this.state.depositAddress,
        };

        this.props.onAddFunds(transaction);
    }
    onAmountChange(e) {
        // var amt = parseInt(e.target.value);
        var val = e.target.value;
        if(isNaN(val))
            alert("Please enter a numerical value.");
        else
            this.setState({amount: e.target.value});
    }
    // onAmountFocus(e) {
    //     if(e.target.value == 'Enter Amount') {
    //         this.setState({amount: ''});
    //     }
    // }
    // onAmountBlur(e) {
    //     if(e.target.value == '') {
    //         this.setState({amount: 'Enter Amount'});
    //     }
    // }

    render() {
        return (
            <div className="add-transaction">
                <div className="container">
                    <h1>Add Jobcoin</h1>
                    <p>Send Jobcoin to be deposited into your accounts:</p>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" value={this.state.amount} onChange={this.onAmountChange} />
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        );
        //
        // return (
        //     <div className="add-transaction">
        //         <div className="container">
        //             <h1>Add Jobcoin</h1>
        //             <p>Send Jobcoin to be deposited into your accounts:</p>
        //             <form onSubmit={this.props.onDeposit}>
        //                 <input type="text" value={this.state.amount} onChange={this.onAmountChange} onFocus={this.onAmountFocus} onBlur={this.onAmountBlur} />
        //                 <input type="submit" value="Send" />
        //             </form>
        //         </div>
        //     </div>
        // );
    }
}
AddFunds.defaultProps = {
    amount: 0,
    // toAddress: 'Enter Recipient Address',
    // onUpdate: PropTypes.func.isRequired,
};
// AddFunds.propTypes = {
//     // depositAddress: PropTypes.string.isRequired,
//     addTransaction: PropTypes.func.isRequired,
//     // updateTransactions: PropTypes.func.isRequired,
// };

export default AddFunds;
