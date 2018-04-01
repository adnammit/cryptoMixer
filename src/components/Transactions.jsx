import React from 'react';
import PropTypes from 'prop-types';


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

export default Transactions;
