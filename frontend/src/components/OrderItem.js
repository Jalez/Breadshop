/** @format */

import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Divider,
	IconButton,
	List,
	ListItem,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import UpdateIcon from '@material-ui/icons/Update';
import CartItem from './CartItem';
import { updateOrderState } from '../redux/actionCreators';
import { connect } from 'react-redux';
import { RESPONSE_RECEIVED } from '../OrderStatusConstants';

const useStyles = makeStyles((theme) => ({
	id: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	status: {
		fontWeight: 'bold',
	},
	date: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
}));

const OrderItem = ({ order, changeHandler, expanded, updateOrderState }) => {
	const { orderId, cart, total, status } = order;
	console.log(cart);
	const classes = useStyles();
	const handleChange = (event, isExpanded) => {
		changeHandler(event, isExpanded);
	};

	const handleUpdate = (e) => {
		e.stopPropagation();
		order.status = RESPONSE_RECEIVED;
		updateOrderState(order);
	};

	return (
		<>
			<Accordion expanded={expanded === orderId} onChange={handleChange}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls={`order-${orderId}-content`}
					id={`order-${orderId}-header`}>
					<Box
						display='flex'
						justifyContent='space-between'
						alignItems='center'
						style={{ width: '100%' }}>
						<Typography component={'p'} className={classes.id}>
							Id: {orderId}
						</Typography>
						<Typography component={'p'} className={classes.status}>
							Status: {status}
						</Typography>
						<Typography component={'p'} className={classes.date}>
							Date: {}
						</Typography>
						<Box>
							Update:
							<IconButton variant='extended' onClick={handleUpdate}>
								<UpdateIcon />
							</IconButton>
						</Box>
					</Box>
				</AccordionSummary>
				<AccordionDetails>
					<List style={{ width: '100%' }}>
						{cart.map(({ id, amount, image, name, price }) => {
							return (
								<CartItem
									key={id}
									id={id}
									amount={amount}
									image={image}
									name={name}
									price={price}>
									Quantity: {amount}
								</CartItem>
							);
						})}
						<Divider />

						<ListItem>Total: {total}</ListItem>
					</List>
				</AccordionDetails>
			</Accordion>
		</>
	);
};

export default connect(null, { updateOrderState })(OrderItem);
