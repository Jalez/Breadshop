/** @format */

import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const Notification = ({ notification }) => {
	const [open, setOpen] = useState(false);
	const { message, severity } = notification[0];
	const noticeDuration = 3000;

	// Fires whenever message changes.
	useEffect(() => {
		console.log('gets here');
		if (notification[0].message) {
			setOpen(true);
		}
	}, [notification]);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') return;
		setOpen(false);
	};

	return (
		<Snackbar
			open={open}
			autoHideDuration={noticeDuration}
			onClose={handleClose}>
			<Alert onClose={handleClose} severity={severity}>
				{message}
			</Alert>
		</Snackbar>
	);
};

const mapStateToProps = (state) => {
	return { notification: state.notifications };
};

export default connect(mapStateToProps, null)(Notification);
