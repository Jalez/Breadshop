/** @format */

import React from 'react';
import { IconButton } from '@material-ui/core';
import { updateCartItem } from '../redux/actionCreators';
import { connect } from 'react-redux';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const AmountUpdater = ({ amount, id, updateCartItem }) => (
	<>
		<IconButton disabled={amount === 0} onClick={(e) => updateCartItem(id, -1)}>
			<RemoveIcon />
		</IconButton>
		{amount}
		<IconButton onClick={(e) => updateCartItem(id, 1)}>
			<AddIcon />
		</IconButton>
	</>
);

export default connect(null, { updateCartItem })(AmountUpdater);
