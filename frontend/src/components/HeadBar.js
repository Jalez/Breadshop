/** @format */

import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Badge,
	IconButton,
	Toolbar,
	Typography,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
		height: 50,
		// position: ,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'block',
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}));

export default function HeadBar() {
	const classes = useStyles();

	return (
		<div className={classes.grow}>
			<AppBar position='fixed'>
				<Toolbar>
					<Typography className={classes.title} variant='h6' noWrap>
						Sandwich shop
					</Typography>
					<div className={classes.grow} />
					<IconButton aria-label='show 17 new notifications' color='inherit'>
						<Badge badgeContent={17} color='secondary'>
							<NotificationsIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}
