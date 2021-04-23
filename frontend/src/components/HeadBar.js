/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import { Link } from 'react-router-dom';

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
		details: 'MENU /',
	},
	{
		details: 'CART /cart',
	},
	{
		details: 'ORDERS /orders',
	},
	{
		details: 'ABOUT US /aboutus',
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
								{options.map(({ details }) => {
									const [name, ...url] = details.split('/');
									return (
										<Link
											to={`/${url[0].toLowerCase()}`}
											style={{ color: 'black' }}>
											<Box>
												<Button color='inherit'>
													<Typography
														className={classes.font}
														variant='h6'
														noWrap>
														{name}
													</Typography>
												</Button>
											</Box>
										</Link>
									);
								})}
								<Box>
									<IconButton
										aria-label='show 17 new notifications'
										color='inherit'>
										<Badge badgeContent={''} color='secondary'>
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
