/** @format */

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import { lime } from '@material-ui/core/colors';
import Cart from './components/Cart';
import HeadBar from './components/HeadBar';
<<<<<<< HEAD
import Notification from './components/Notification';
import Shop from './components/Shop';
import About from './components/About';
import { getImage } from './utils/getImage';
=======
import ShopList from './components/ShopList';
import React from 'react';
import 'react-notifications-component/dist/theme.css';
import ReactNotification from 'react-notifications-component'

>>>>>>> 7bb4db310f28506612fd59fdd909ce4543c48cef

const theme = createMuiTheme({
	palette: {
		primary: lime,
		secondary: {
			main: '#c0ca33',
		},
	},
});

const useStyle = makeStyles((theme) => ({
	root: {
		minHeight: '98vh',

		// width: '10000',
		backgroundImage: `url(${getImage('background4', 'png')})`,
		backgroundSize: 360,
		// backgroundColor: '#e6f7d0',
		// backgroundRepeat: 'space',

		overflow: 'hidden',
	},
}));

function App() {
	const classes = useStyle();
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<div className={classes.root}>
					<HeadBar />
					<Switch>
						<Route exact path='/about' component={About} />
						<Route exact path='/' component={Shop} />
						<Route exact path='/order' component={About} />
					</Switch>
					{/* <ShopList /> */}
					<Cart />
					<Notification />
					{/* <About /> */}
				</div>
			</Router>
		</ThemeProvider>
	
	);
}




export default App;
