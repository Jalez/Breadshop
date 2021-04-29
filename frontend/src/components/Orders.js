/** @format */

import {
	AppBar,
	Badge,
	Box,
	Button,
	IconButton,
	makeStyles,
	Tab,
	Tabs,
	TextField,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import FlexPaper from './FlexPaper';
import OrderItem from './OrderItem';
import {
	RESPONSE_AWAITING,
	RESPONSE_RECEIVED,
	RESPONSE_READY,
} from '../OrderStatusConstants';
import { addNotification, fetchOrders } from '../redux/actionCreators';

const useStyles = makeStyles((theme) => ({
	orders: {
		margin: 10,
	},
	font: {
		fontFamily: 'fantasy',
		fontSize: '1.5em',
	},
}));

const Order = ({ orders, addNotification, fetchOrders }) => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const [expanded, setExpanded] = React.useState(false);

	const handleTabChange = (event, newValue) => {
		setValue(newValue);
	};
	const handleExpandedChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const handleGetAll = () => {
		fetchOrders();
	};

	useEffect(() => {
		addNotification({
			message: `Orders have updated`,
			severity: 'info',
		});
	}, [orders, addNotification]);

	const renderAlternativeInfo = () => (
		<p style={{ textAlign: 'center' }}>
			It looks like you have no bread orders listed. See CART and confirm some
			purchases, or get all orders from the database by clicking the button!
		</p>
	);

	const renderOrderList = () => {
		let awaitingOrders = [];
		let receivedOrders = [];
		let readyOrders = [];
		orders.forEach((order) => {
			const orderItem = (
				<OrderItem
					key={order.orderId}
					changeHandler={handleExpandedChange(order.orderId)}
					expanded={expanded}
					order={order}
				/>
			);
			if (order.status === RESPONSE_AWAITING) {
				awaitingOrders.push(orderItem);
			} else if (order.status === RESPONSE_RECEIVED) {
				receivedOrders.push(orderItem);
			} else {
				readyOrders.push(orderItem);
			}
		});

		const AWAITING = (
			<Badge badgeContent={awaitingOrders.length} color='secondary'>
				{RESPONSE_AWAITING}
			</Badge>
		);
		const RECEIVED = (
			<Badge badgeContent={receivedOrders.length} color='secondary'>
				{RESPONSE_RECEIVED}
			</Badge>
		);
		const READY = (
			<Badge badgeContent={readyOrders.length} color='secondary'>
				{RESPONSE_READY}
			</Badge>
		);
		return (
			<div className={classes.orders}>
				<AppBar position='static'>
					<Tabs
						value={value}
						onChange={handleTabChange}
						aria-label='Order states selection'>
						<Tab label={AWAITING} {...a11yProps(0)} />
						<Tab label={RECEIVED} {...a11yProps(1)} />
						<Tab label={READY} {...a11yProps(2)} />
					</Tabs>
				</AppBar>
				<TabPanel value={value} index={0}>
					{awaitingOrders}
				</TabPanel>
				<TabPanel value={value} index={1}>
					{receivedOrders}
				</TabPanel>
				<TabPanel value={value} index={2}>
					{readyOrders}
				</TabPanel>
			</div>
		);
	};

	return (
		<FlexPaper header='ORDERS'>
			<Box display='flex' justifyContent='center' alignItems='center'>
				<Button
					color='primary'
					onClick={handleGetAll}
					className={classes.font}
					variant='contained'>
					Get all orders
					<SearchIcon />
				</Button>
			</Box>

			{orders.length > 0 ? renderOrderList() : renderAlternativeInfo()}
		</FlexPaper>
	);
};

const mapStateToProps = (state) => {
	return { orders: state.orders };
};

const a11yProps = (index) => {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
};

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	);
};

export default connect(mapStateToProps, { addNotification, fetchOrders })(
	Order
);
