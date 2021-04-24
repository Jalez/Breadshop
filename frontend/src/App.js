/** @format */

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import { lime } from '@material-ui/core/colors';
import Notification from './components/Notification';
import Cart from './components/Cart';
import Shop from './components/Shop';
import About from './components/About';
import { getImage } from './utils/getImage';
import Orders from './components/Orders';
import NavBar from './components/NavBar';
import RouteButton from './components/RouteOption';

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
		backgroundImage: `url(${getImage('background4', 'png')})`,
		backgroundSize: 360,
		overflow: 'hidden',
	},
}));

function App() {
	const classes = useStyle();
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<div className={classes.root}>
					<NavBar>
						<RouteButton path='/' title='MENU' />
						<RouteButton path='/cart' title='CART' />
						<RouteButton path='/orders' title='ORDERS' />
						<RouteButton path='/about' title='ABOUT' />
					</NavBar>
					<Switch>
						<Route exact path='/' component={Shop} />
						<Route exact path='/cart' component={Cart} />
						<Route exact path='/orders' component={Orders} />
						<Route exact path='/about' component={About} />
					</Switch>
					<Notification />
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
