/** @format */

import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	font: {
		fontFamily: 'fantasy, roboto',
	},
}));

const RouteButton = ({ path, title }) => {
	const classes = useStyles();
	return (
		<Link to={`${path.toLowerCase()}`} style={{ color: 'black' }}>
			<Box>
				<Button color='inherit'>
					<Typography className={classes.font} variant='h6' noWrap>
						{title}
					</Typography>
				</Button>
			</Box>
		</Link>
	);
};

export default RouteButton;
