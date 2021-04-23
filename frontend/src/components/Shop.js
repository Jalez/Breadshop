/** @format */

import { Grid } from '@material-ui/core';
import React from 'react';
import ShopItem from './ShopItem';
import sandwiches from '../data/sandwiches';
import FlexPaper from './FlexPaper';

const Shop = () => {
	// console.log(window.location.pathname);
	return (
		<FlexPaper header={'MENU'}>
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
		</FlexPaper>
	);
};

export default Shop;
