/** @format */

import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Badge,
	Box,
	Button,
	Grid,
	IconButton,
	Toolbar,
	Typography,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
		height: 60,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	font: {
		fontFamily: 'fantasy',
	},
	title: {},
}));

const options = [
	{
		name: 'MENU',
	},
	{
		name: 'CART',
	},
	{
		name: 'ORDERS',
	},
	{
		name: 'ABOUT US',
	},
];

export default function HeadBar() {
	const classes = useStyles();

	return (
		<div className={classes.grow}>
			<AppBar position='fixed'>
				<Toolbar>
					<Grid
						container
						direction='row'
						justify='center'
						alignItems='center'
						alignContent='center'>
						<Grid item xs={12} md={6}>
							<Box display='flex' justifyContent='center'>
								<Box>
									<Typography className={classes.font} variant='h2'>
										BREADSHOP
									</Typography>
								</Box>
							</Box>
						</Grid>
						<div className={classes.grow} />
						<Grid item xs={12} md={6}>
							<Box display='flex' justifyContent='space-between'>
								{options.map(({ name }) => (
									<Box>
										<Button color='inherit'>
											<Typography className={classes.font} variant='h6' noWrap>
												{name}
											</Typography>
										</Button>
									</Box>
								))}
								<Box>
									<IconButton
										aria-label='show 17 new notifications'
										color='inherit'>
										<Badge badgeContent={17} color='secondary'>
											<NotificationsIcon />
										</Badge>
									</IconButton>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
}
