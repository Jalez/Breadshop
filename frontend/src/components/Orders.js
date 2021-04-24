/** @format */

import { Box, Button, IconButton, TextField } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import FlexPaper from './FlexPaper';
import SearchIcon from '@material-ui/icons/Search';

const Order = ({ orders }) => {
	const renderAlternativeInfo = () => (
		<p style={{ textAlign: 'center' }}>
			It looks like you have no bread orders listed. See CART and confirm some
			purchases, or search for a bread order by its id!
		</p>
	);

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

			{orders.length > 0 ? '' : renderAlternativeInfo()}
		</FlexPaper>
	);
};

const mapStateToProps = (state) => {
	return { orders: state.orders };
};

export default connect(mapStateToProps, null)(Order);
