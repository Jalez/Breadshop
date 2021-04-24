/** @format */

import { Box, Button, List, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { addNotification, addOrder, emptyCart } from '../redux/actionCreators';
import CartItem from './CartItem';
import FlexPaper from './FlexPaper';

const useStyle = makeStyles((theme) => ({
	font: {
		fontFamily: 'fantasy',
	},
}));

const Cart = ({ cart, emptyCart, addNotification, addOrder }) => {
	const { font } = useStyle();
	let total;

	const generateOrderId = () => {
		return Math.floor(Math.random() * 1000);
	};

	const confirmHandler = (event) => {
		const orderId = generateOrderId();
		const status = 'Awaiting response...';
		addOrder({ orderId, cart, total, status });
		emptyCart();
		addNotification({
			message: `A new order placed! Order Id: ${orderId}`,
			severity: 'info',
		});
	};
	const renderAlternativeInfo = () => (
		<p style={{ textAlign: 'center' }}>
			It looks like you have no bread in your cart yet. See MENU and add some!
		</p>
	);

	const renderCartItems = () => {
		total = 0;
		return cart.map(({ id, amount, image, name, price }) => {
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
	};
	return (
		<FlexPaper header='CART'>
			{cart.length > 0 ? (
				<>
					<List>{renderCartItems()}</List>
					<Box display='flex' justifyContent='space-between'>
						<Box>
							<Typography className={font} variant='h5'>
								TOTAL: {total} €
							</Typography>
						</Box>
						<Box>
							<Button
								color='primary'
								onClick={confirmHandler}
								variant='contained'
								className={font}>
								Confirm Order
							</Button>
						</Box>
					</Box>
				</>
			) : (
				renderAlternativeInfo()
			)}
		</FlexPaper>
	);
};

const mapStateToProps = (state) => {
	return { cart: state.cart };
};

export default connect(mapStateToProps, {
	emptyCart,
	addNotification,
	addOrder,
})(Cart);
