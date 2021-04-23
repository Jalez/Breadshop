/** @format */

import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 'fit-content',
		margin: theme.spacing(4),
		padding: theme.spacing(4),
	},
}));

const FlexPaper = ({ header, children }) => {
	const { root } = useStyles();

	return (
		<Box display='flex' justifyContent='center' alignItems='center'>
			<Box>
				<Paper className={root} elevation={3}>
					<Typography
						variant='h3'
						style={{
							fontFamily: 'fantasy',
							textAlign: 'center',
							marginBottom: 30,
						}}>
						{header}
					</Typography>
					{children}
				</Paper>
			</Box>
		</Box>
	);
};

export default FlexPaper;
