/** @format */

import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	List,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CartItem from './CartItem';

const useStyles = makeStyles((theme) => ({
	// Not in use
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
}));

const OrderItem = ({ expanded, changeHandler, orderId, cart, total }) => {
	const classes = useStyles();
	const handleChange = (event, isExpanded) => {
		changeHandler(event, isExpanded);
	};

	return (
		<>
			<Accordion expanded={expanded === orderId} onChange={handleChange}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls={`order-${orderId}-content`}
					id={`order-${orderId}-header`}>
					<Typography component={'span'} className={classes.heading}>
						Id: {orderId}
					</Typography>
					<Typography component={'span'} className={classes.secondaryHeading}>
						Date: {}
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List style={{ width: '100%' }}>
						{cart.map(({ id, amount, image, name, price }) => {
							total += amount * price;
							return (
								<CartItem
									key={id}
									id={id}
									amount={amount}
									image={image}
									name={name}
									price={price}>
									{amount}
								</CartItem>
							);
						})}
					</List>
				</AccordionDetails>
			</Accordion>
		</>
	);
};

export default OrderItem;
