/** @format */

import {
	AppBar,
	Box,
	IconButton,
	Tab,
	Tabs,
	TextField,
} from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import FlexPaper from './FlexPaper';
import OrderItem from './OrderItem';
import {
	RESPONSE_AWAITING,
	RESPONSE_RECEIVED,
	RESPONSE_READY,
} from '../OrderStatusConstants';

const Order = ({ orders }) => {
	// const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleTabChange = (event, newValue) => {
		setValue(newValue);
	};
	const [expanded, setExpanded] = React.useState(false);
	const handleExpandedChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const renderAlternativeInfo = () => (
		<p style={{ textAlign: 'center' }}>
			It looks like you have no bread orders listed. See CART and confirm some
			purchases, (or search for a bread order by its id! -- NOT IMPLEMENTED YET)
		</p>
	);

	const renderOrderList = () => {
		let awaitingOrders = [];
		let receivedOrders = [];
		let readyOrders = [];
		orders.forEach(({ orderId, cart, total, status }) => {
			const order = (
				<OrderItem
					key={orderId}
					changeHandler={handleExpandedChange(orderId)}
					expanded={expanded}
					orderId={orderId}
					cart={cart}
					total={total}
					status={status}
				/>
			);
			if (status === RESPONSE_AWAITING) {
				awaitingOrders.push(order);
			} else if (status === RESPONSE_RECEIVED) {
				receivedOrders.push(order);
			} else {
				readyOrders.push(order);
			}
		});
		return (
			<>
				<AppBar position='static'>
					<Tabs
						value={value}
						onChange={handleTabChange}
						aria-label='simple tabs example'>
						<Tab label={RESPONSE_AWAITING} {...a11yProps(0)} />
						<Tab label={RESPONSE_RECEIVED} {...a11yProps(1)} />
						<Tab label={RESPONSE_READY} {...a11yProps(2)} />
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
			</>
		);
	};

	return (
		<FlexPaper header='ORDERS'>
			<Box display='flex' justifyContent='center' alignItems='center'>
				<form noValidate autoComplete='off'>
					<TextField id='standard-basic' label='Search for order Id' />
				</form>
				<IconButton>
					<SearchIcon />
				</IconButton>
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

export default connect(mapStateToProps, null)(Order);
