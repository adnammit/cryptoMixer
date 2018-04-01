import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// import Transactions from './Transactions.jsx';

function Transactions (props) {
	var totalBalance = props.items.reduce(function(total, item) {
		return total + item.amount;
	}, 0)

	return (
		<table className="transactions">
			<tbody>
				<tr>
					<td>Balance:</td>
					<td>{totalBalance}</td>
				</tr>
			</tbody>
		</table>
	);
}

Transactions.propTypes = {
	items: PropTypes.array.isRequired,
};

function Header (props) {
	return (
		<div className="header">
			<h1>{props.title}</h1>
			<Transactions items={props.items}/>
		</div>
	);
}
Header.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired,
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
			<div className="item-remove">
				// <a onClick={props.onRemove}>x</a>
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
            items: props.initialItems,
            loggedIn: false
        }
        this.onItemAdd = this.onItemAdd.bind(this);
        this.onRemoveItem = this.onRemoveItem.bind(this);
    }

	onItemAdd(toAddress, amount) {
		var d = new Date();
		this.state.items.push({
			name: name,
			amount: parseInt(amount,10),
			id: nextId,
			date: d.toLocaleDateString("en-US"),
		});
		this.setState(this.state);
		nextId += 1;
	}

	onRemoveItem(index) {
		this.state.items.splice(index, 1);
		this.setState(this.state);
	}

	render() {
		return (
			<div className="mixer">
                <Header title={this.props.title} items={this.state.items} />
                <div className="items">
                    {this.state.items.map(function(item, index) {
                        // var amt = parseFloat(item.amount);
                        return (
                            <Item
                                amount={item.amount}
                                timestamp={item.timestamp}
                                toAddress={item.toAddress}
                                fromAddress={item.fromAddress}
                                key={item.id}
                                onAmountChange={function(delta) {this.onAmountChange(index, delta)}.bind(this)}
                                onRemove={function() {this.onRemoveItem(index)}.bind(this)}
                            />
                        );
                    }.bind(this))}
                </div>
			</div>
		);
	}
}
Mixer.defaultProps = {
    title: "Someone's Jobcoin Mixer"
};
Mixer.propTypes = {
	title: PropTypes.string,
	initialItems: PropTypes.arrayOf(PropTypes.shape({
		amount: PropTypes.string.isRequired,
        fromAddress: PropTypes.string,
		toAddress: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
	})).isRequired,
};

export default Mixer;
