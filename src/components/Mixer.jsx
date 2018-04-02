import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Header (props) {
	return (
		<div className="header">
			<h1>JMix : Transactions for [ {props.depositAddress} ]</h1>
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
	return (
		<div className="item">
			<div className="item-date">
				{props.timestamp}
			</div>
            <div className="item-from">
				{props.fromAddress}
			</div>
            <div className="item-to">
                {props.toAddress}
            </div>
			<div className="item-amount">
				{props.amount}
			</div>
		</div>
	);
}
Item.propTypes = {
    amount: PropTypes.string.isRequired,
    fromAddress: PropTypes.string,
    toAddress: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
};

class Mixer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: props.transactions,
            loggedIn: props.loggedIn,
            depositAddress: props.depositAddress,
        }
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
                                    timestamp={item.timestamp}
                                    toAddress={item.toAddress}
                                    fromAddress={item.fromAddress}
                                    key={item.id}
                                    />
                            );
                        }
                    }.bind(this))}
                </div>
            </div>
        );
	}
}
Mixer.defaultProps = {
};
Mixer.propTypes = {
    depositAddress: PropTypes.string.isRequired,
	transactions: PropTypes.arrayOf(PropTypes.shape({
		amount: PropTypes.string.isRequired,
        fromAddress: PropTypes.string,
		toAddress: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
	})).isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default Mixer;
