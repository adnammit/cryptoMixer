import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import AddTransaction from './AddTransaction.jsx';
import AddFunds from './AddFunds.jsx';

function Header (props) {
    return (
        <div className="header">
            <h1>JMix Transactions</h1>
            <div className="user-info">
                <p> [ logged in as {props.primaryAddress} ] </p>
                <input className="logout-button" type="submit" value="Log Out" onClick={props.onLogout} />
            </div>
            <div className="table-header">
                <div className="table-header-date">
                    <h3>Date</h3>
                </div>
                <div className="table-header-from">
                    <h3>From</h3>
                </div>
                <div className="table-header-to">
                    <h3>To</h3>
                </div>
                <div className="table-header-amount">
                    <h3>$</h3>
                </div>
            </div>
        </div>
    );
}
Header.propTypes = {
    primaryAddress: PropTypes.string.isRequired
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
    }

    render() {
        return (
            <div className="mixer">
                <Header primaryAddress={this.props.primaryAddress} onLogout={this.props.onLogout} />
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
                <div className="transaction-elems">
                    <AddTransaction primaryAddress={this.props.primaryAddress}  onHandleTransaction={this.props.onHandleTransaction} />
                    <AddFunds primaryAddress={this.props.primaryAddress} houseAddress={this.props.houseAddress}  onHandleTransaction={this.props.onHandleTransaction} onMixFunds={this.props.onMixFunds} />
                </div>
            </div>
        );
    }
}

export default Mixer;
