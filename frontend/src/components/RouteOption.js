/** @format */

import { Badge, Box, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	font: {
		fontFamily: 'roboto',
	},
}));

const RouteButton = ({ path, title, state }) => {
	const classes = useStyles();
	return (
		<Link to={`${path.toLowerCase()}`} style={{ color: 'black' }}>
			<Box>
				<Button color='inherit'>
					<Badge badgeContent={state?.length ? '!' : null} color='secondary'>
						<Typography className={classes.font} variant='h6' noWrap>
							{title}
						</Typography>
					</Badge>
				</Button>
			</Box>
		</Link>
	);
};

export default RouteButton;
