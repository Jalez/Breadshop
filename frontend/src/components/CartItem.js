/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Divider, Grid, ListItem } from '@material-ui/core';
import { updateCartItem } from '../redux/actionCreators';
import { connect } from 'react-redux';
import AmountUpdater from './AmountUpdater';

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
}));

const CartItem = ({ id, name, amount, image, price, updateCartItem }) => {
	const classes = useStyles();

	return (
		<>
			<ListItem className={classes.item}>
				<Grid container justify='space-between'>
					<Grid item xs={6} sm={3}>
						<Avatar alt={name} src={image} className={classes.image} />
					</Grid>
					<Grid item xs={6} sm={3}>
						<h3>{name}</h3>
					</Grid>
					<Grid item>
						<p className=''> {price} €</p>
					</Grid>
					<Grid item>
						<AmountUpdater amount={amount} id={id} />
					</Grid>
				</Grid>
			</ListItem>

			<Divider />
		</>
	);
};

export default connect(null, { updateCartItem })(CartItem);
