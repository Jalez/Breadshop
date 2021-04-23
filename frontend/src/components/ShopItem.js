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
import { CardActionArea } from '@material-ui/core';
import { connect } from 'react-redux';
import { addCartItem, updateCartItem } from '../redux/actionCreators';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 210,
	},

	media: {
		paddingTop: '56.25%', // 16:9
	},

	desc: {
		height: 200,
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
	cart,
}) => {
	const classes = useStyles();
	const [amount, setAmount] = useState(0);

	const handleCartClick = (e) => {
		// Check if it already exists
		if (cart.find((item) => item.id === id)) {
			updateCartItem(id, amount);
		} else {
			const newCartItem = {
				id,
				name,
				image,
				amount,
				price,
			};
			addCartItem(newCartItem);
		}
		setAmount(0);
	};

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={image} title={name} />
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{name}
					</Typography>
					<Typography
						className={classes.desc}
						variant='body2'
						color='textSecondary'
						component='p'>
						{description}
					</Typography>
					<Typography gutterBottom variant='h5' component='h3'>
						{price} €
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<IconButton
					disabled={amount === 0}
					onClick={(e) => setAmount(amount - 1)}>
					<RemoveIcon />
				</IconButton>
				{amount}
				<IconButton onClick={(e) => setAmount(amount + 1)}>
					<AddIcon />
				</IconButton>
				<IconButton
					disabled={amount === 0}
					onClick={handleCartClick}
					color='primary'>
					<AddShoppingCartIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};

const mapStateToProps = (state) => {
	return { cart: state.cart };
};

export default connect(mapStateToProps, { addCartItem, updateCartItem })(
	ShopItem
);
