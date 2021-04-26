/** @format */

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { Box, CardActionArea, Fab } from '@material-ui/core';
import { connect } from 'react-redux';
import {
	addCartItem,
	addNotification,
	updateCartItem,
} from '../redux/actionCreators';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 310,
		// minHeight: 400,
	},

	media: {
		paddingTop: '56.25%', // 16:9
	},

	desc: {
		height: 100,
		overflow: 'auto',
	},

	avatar: {
		backgroundColor: red[500],
	},
}));

const ShopItem = ({
	id,
	name,
	description,
	image,
	price,
	addCartItem,
	updateCartItem,
	addNotification,
	cart,
}) => {
	const classes = useStyles();
	const [amount, setAmount] = useState(0);

	const handleCartClick = (e) => {
		// If the user clicks the photo of the bread, amount can still be 0. Make that click mean atleast 1.
		// That way, there's always a minAmount of 1 that gets added.
		const minAmount = amount || 1;
		// Check if it already exists
		if (cart.find((item) => item.id === id)) {
			updateCartItem(id, minAmount);
		} else {
			const newCartItem = {
				id,
				name,
				image,
				amount: minAmount,
				price,
			};
			addCartItem(newCartItem);
		}
		// Inform the user that his selection has been added to cart
		addNotification({
			message: `Added ${minAmount} ${name} to CART.`,
			severity: 'info',
		});
		setAmount(0);
	};

	return (
		<Card className={classes.root}>
			<CardActionArea onClick={handleCartClick}>
				<CardMedia className={classes.media} image={image} title={name} />
				<CardContent>
					<Typography
						gutterBottom
						variant='h5'
						component='h2'
						style={{ fontFamily: 'fantasy' }}>
						<Box display='flex' justifyContent='space-between'>
							<Box>{name + ', '}</Box>
							<Box>{price + ' €'}</Box>
						</Box>
					</Typography>
					<Typography
						className={classes.desc}
						variant='body2'
						color='textSecondary'
						component='p'
						style={{ textAlign: 'justify' }}>
						{description}
					</Typography>
					<Typography
						gutterBottom
						variant='h5'
						component='h3'
						style={{ fontFamily: 'fantasy' }}></Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Box
					display='flex'
					justifyContent='space-around'
					style={{ width: '100%' }}>
					<Box>
						<IconButton
							disabled={amount === 0}
							onClick={(e) => setAmount(amount - 1)}>
							<RemoveIcon />
						</IconButton>
						{amount}
						<IconButton onClick={(e) => setAmount(amount + 1)}>
							<AddIcon />
						</IconButton>
					</Box>
					<Fab
						disabled={amount === 0}
						onClick={handleCartClick}
						variant='round'
						color='primary'
						aria-label='add to cart'>
						<AddShoppingCartIcon />
					</Fab>
				</Box>
			</CardActions>
		</Card>
	);
};

const mapStateToProps = (state) => {
	return { cart: state.cart };
};

export default connect(mapStateToProps, {
	addCartItem,
	updateCartItem,
	addNotification,
})(ShopItem);
