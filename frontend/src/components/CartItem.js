/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { Avatar, Box } from '@material-ui/core';
import { updateCartItem } from '../redux/actionCreators';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	image: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},

	media: {
		// maxWidth: 110,
		paddingTop: '56.25%', // 16:9
		// maxHeight: 10,
	},

	avatar: {
		backgroundColor: red[500],
	},
}));

const CartItem = ({ id, name, amount, image, price, updateCartItem }) => {
	const classes = useStyles();

	return (
		<>
			<Box
				display='flex'
				flexDirection='row'
				alignItems='center'
				justifyContent='space-around'>
				<Box>
					<Avatar alt={name} src={image} className={classes.image} />
				</Box>

				<Box>
					<h2>{name}</h2>
				</Box>

				<Box>Unit price: {price} €</Box>
				<Box>
					Amount:
					<IconButton
						disabled={amount === 0}
						onClick={(e) => updateCartItem(id, -1)}>
						<RemoveIcon />
					</IconButton>
					{amount}
					<IconButton onClick={(e) => updateCartItem(id, 1)}>
						<AddIcon />
					</IconButton>
				</Box>
				<Box display='flex' flexDirection='column'>
					<Box>Total: {amount * price}</Box>
				</Box>
			</Box>
			<hr />
		</>
	);
};

export default connect(null, { updateCartItem })(CartItem);
