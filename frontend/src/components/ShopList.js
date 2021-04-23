/** @format */

import { Grid } from '@material-ui/core';
import React from 'react';
import ShopItem from './ShopItem';
import sandwiches from '../data/sandwiches';

const ShopList = () => {
	console.log(window.location.pathname);
	return (
		<Grid container spacing={3} justify='center'>
			{sandwiches.map(({ id, name, description, image, price }) => (
				<Grid item key={id}>
					<ShopItem
						id={id}
						name={name}
						description={description}
						image={image}
						price={price}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default ShopList;
