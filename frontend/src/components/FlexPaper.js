/** @format */

import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '70vw',
		margin: theme.spacing(4),
		padding: theme.spacing(4),
		background: 'rgba(255, 255, 255,0.92)',
	},
	header: {
		fontFamily: 'roboto',
		textAlign: 'center',
		marginBottom: 30,
	},
	content: {
		background: 'rgba(255, 255, 255,0.5)',
	},
}));

const FlexPaper = ({ header, children }) => {
	const classes = useStyles();

	return (
		<Box display='flex' justifyContent='center' alignItems='center'>
			<Box>
				<Paper className={classes.root} elevation={3}>
					<div className={classes.content}>
						<Typography variant='h3' className={classes.header}>
							{header}
						</Typography>
						{children}
					</div>
				</Paper>
			</Box>
		</Box>
	);
};

export default FlexPaper;
