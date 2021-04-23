/** @format */

import {
	Box,
	Button,
	Drawer,
	Fab,
	makeStyles,
	Paper,
	Typography,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { store } from 'react-notifications-component';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNotification, addOrder, emptyCart } from '../redux/actionCreators';
import CartItem from './CartItem';
import FlexPaper from './FlexPaper';


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
	padding: {
		padding: theme.spacing(2),
	},
}));

const Cart = ({ cart, emptyCart, addNotification }) => {
	const { padding, drawer } = useStyle();
	const [drawerOpen, setDrawerOpen] = useState(false);
	let total = 0;

	const toggleDrawer = () => (event) => {
		setDrawerOpen(!drawerOpen);
	};

	const generateOrderId = () => {
		return Math.floor(Math.random() * 1000);
	};

	const confirmHandler = (event) => {
		// At this point, several things need to happen
		// 1. A new order must be made
		const orderId = generateOrderId();
		addOrder({ orderId, cart, total });
		// 2. The cart must be cleared
		emptyCart();
		// state must be set to false
		setDrawerOpen(!drawerOpen);
		// A notification should be sent to the user
<<<<<<< HEAD
		addNotification({
			message: `A new order placed! Order Id: ${orderId}`,
			severity: 'info',
		});
=======
		store.addNotification({
			title: "OK!",
			message: "Order sent!",
			type: "success",
			insert: "top",
			container: "top-right",
			animationIn: ["animate__animated", "animate__fadeIn"],
			animationOut: ["animate__animated", "animate__fadeOut"],
			dismiss: {
			  duration: 5000,
			  onScreen: true
			}
		  });
>>>>>>> 7bb4db310f28506612fd59fdd909ce4543c48cef
	};

	const renderDrawer = () => {
		total = 0;
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
			<div className={padding}>
				{cartItems}
				<Box display='flex' justifyContent='space-between'>
					<Box>
						<Typography variant='h5'>TOTAL: {total} </Typography>
					</Box>
					<Box>
						<Button
							color='primary'
							onClick={confirmHandler}
							variant='contained'>
							Confirm order
						</Button>
					</Box>
				</Box>
			</div>
		);
	};
	return <FlexPaper header='CART'></FlexPaper>;
	// return (
	// 	<>
	// 		<Fab
	// 			color='primary'
	// 			aria-label='add'
	// 			onClick={toggleDrawer()}
	// 			disabled={cart.length === 0}>
	// 			<ShoppingCartIcon />
	// 		</Fab>

	// 		<Drawer
	// 			anchor={'top'}
	// 			open={drawerOpen}
	// 			onClose={toggleDrawer()}
	// 			classes={{ paperAnchorTop: drawer }}>
	// 			{renderDrawer()}
	// 		</Drawer>
	// 	</>
	// );
};

const mapStateToProps = (state) => {
	return { cart: state.cart };
};

export default connect(mapStateToProps, { emptyCart, addNotification })(Cart);