import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import AddTransaction from './AddTransaction.jsx';
import AddFunds from './AddFunds.jsx';

function Header (props) {
	return (
		<div className="header">
			<h1>JMix Transactions</h1>
            <p> [ logged in as {props.depositAddress} ] </p>
            <div className="table-header">
                <div className="table-header-date">
                    <h2>Date</h2>
                </div>
                <div className="table-header-from">
                    <h2>From</h2>
                </div>
                <div className="table-header-to">
                    <h2>To</h2>
                </div>
                <div className="table-header-amount">
                    <h2>$</h2>
                </div>
            </div>
		</div>
	);
}
Header.propTypes = {
    depositAddress: PropTypes.string.isRequired
};

function Item (props) {
    function displayMoney(amount) {
        return '$' + Number.parseFloat(amount).toFixed(2);
    }
    let amount = displayMoney(props.amount);
	return (
		<div className="item">
            <div className="item-date">
				{props.date}
			</div>
            <div className="item-from">
				{props.fromAddress}
			</div>
            <div className="item-to">
                {props.toAddress}
            </div>
			<div className="item-amount">
				{amount}
			</div>
		</div>
	);
}
Item.propTypes = {
    amount: PropTypes.string.isRequired,
    fromAddress: PropTypes.string,
    toAddress: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

class Mixer extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     transactions: props.transactions,
        //     loggedIn: props.loggedIn,
        //     depositAddress: props.depositAddress,
        // }
    }

    // componentDidMount() {
    //     this.props.onUpdate();
    // }

    render() {
        return (
            <div className="mixer">
                <Header depositAddress={this.props.depositAddress} />
                <div className="items">
                    {this.props.transactions.map(function(item, index) {
                        if(item) {
                            return (
                                <Item
                                    amount={item.amount}
                                    date={item.date}
                                    toAddress={item.toAddress}
                                    fromAddress={item.fromAddress}
                                    key={item.id}
                                    />
                            );
                        }
                    }.bind(this))}
                </div>
                <AddTransaction depositAddress={this.props.depositAddress}  addTransaction={this.props.onAddTransaction} />
                <AddFunds depositAddress={this.props.depositAddress}  onAddFunds={this.props.onAddFunds} />
            </div>
        );
	}
}
// Mixer.defaultProps = {
//     // updateTransactions: PropTypes.func.isRequired,
//     addTransaction: PropTypes.func.isRequired,
// };
// Mixer.propTypes = {
//     depositAddress: PropTypes.string.isRequired,
// 	transactions: PropTypes.arrayOf(PropTypes.shape({
// 		amount: PropTypes.string.isRequired,
//         fromAddress: PropTypes.string,
// 		toAddress: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//         id: PropTypes.number.isRequired,
// 	})).isRequired,
// };

export default Mixer;
