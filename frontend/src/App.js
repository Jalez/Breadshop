/** @format */

import { Grid } from '@material-ui/core';
import HeadBar from './components/HeadBar';
import ItemList from './components/ItemList';

function App() {
	return (
		<div className='App'>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<HeadBar />
				</Grid>
				<Grid item xs={12}>
					<ItemList />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
