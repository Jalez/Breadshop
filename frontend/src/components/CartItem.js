/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Divider, Grid, ListItem } from '@material-ui/core';
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
}));

const CartItem = ({ children, name, image, price }) => {
	const classes = useStyles();

	return (
		<>
			<Divider />
			<ListItem className={classes.item}>
				<Grid container justify='space-between' alignItems='center'>
					<Grid item xs={6} sm={3}>
						<Avatar alt={name} src={image} className={classes.image} />
					</Grid>
					<Grid item xs={6} sm={3}>
						<h3>{name}</h3>
					</Grid>
					<Grid item>
						<p className=''> {price} €</p>
					</Grid>
					<Grid item>{children}</Grid>
				</Grid>
			</ListItem>
		</>
	);
};

export default connect(null, { updateCartItem })(CartItem);
