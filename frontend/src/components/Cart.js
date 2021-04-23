/** @format */

import {
	Box,
	Button,
	Drawer,
	Fab,
	makeStyles,
	Typography,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import React, { useState } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';

const useStyle = makeStyles((theme) => ({
	drawer: {
		borderRadius: '0px 0px 30px 30px',
		[theme.breakpoints.up('lg')]: {
			left: '25%',
			right: '25%',
		},
		[theme.breakpoints.up('md')]: {
			left: '20%',
			right: '20%',
		},
		[theme.breakpoints.up('sm')]: {
			left: '15%',
			right: '15%',
		},
		[theme.breakpoints.up('xs')]: {
			left: '10%',
			right: '10%',
		},
	},
	margin: {
		padding: theme.spacing(2),
	},
}));

const Cart = ({ cart }) => {
	const { margin, drawer } = useStyle();
	const [state, setState] = useState(false);

	const toggleDrawer = () => (event) => {
		setState(!state);
	};

	const submitHandler = (event) => {
		console.log('submitHandler clicked');
		// At this point, several things need to happen
		// 1. A new order must be made
		// 2. The cart must be cleared
		// state must be set to false
		setState(!state);
		// A notification should be sent to the user
	};

	const renderDrawer = () => {
		let total = 0;

		const cartItems = cart.map(({ id, amount, image, name, price }) => {
			total += amount * price;
			return (
				<CartItem
					key={id}
					id={id}
					amount={amount}
					image={image}
					name={name}
					price={price}
				/>
			);
		});

		return (
			<div className={margin}>
				{cartItems}
				<Box display='flex' justifyContent='space-between'>
					<Box>
						<Typography variant='h5'>TOTAL: {total}</Typography>
					</Box>
					<Box>
						<Button color='primary' onClick={submitHandler} variant='contained'>
							Confirm order
						</Button>
					</Box>
				</Box>
			</div>
		);
	};

	return (
		<>
			<Fab color='primary' aria-label='add' onClick={toggleDrawer()}>
				<ShoppingCartIcon />
			</Fab>

			<Drawer
				anchor={'top'}
				open={state}
				onClose={toggleDrawer()}
				classes={{ paperAnchorTop: drawer }}>
				{renderDrawer()}
			</Drawer>
		</>
	);
};

const mapStateToProps = (state) => {
	return { cart: state.cart };
};

export default connect(mapStateToProps, null)(Cart);
