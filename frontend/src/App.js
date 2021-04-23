/** @format */

import { createMuiTheme, Grid, ThemeProvider } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import Cart from './components/Cart';
import HeadBar from './components/HeadBar';
import ShopList from './components/ShopList';
import React from 'react';
import 'react-notifications-component/dist/theme.css';
import ReactNotification from 'react-notifications-component'


const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#689f38',
		},
		secondary: green,
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<HeadBar />
				</Grid>
				<Grid item xs={12}>
					<ShopList />
				</Grid>
			</Grid>
			<Cart />
			<ReactNotification />
		</ThemeProvider>
	
	);
}




export default App;
