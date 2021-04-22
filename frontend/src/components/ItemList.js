/** @format */

import {Grid} from '@material-ui/core';
import React from 'react';
import Item from './Item';
import tempImage from '../images/stockPhoto.jpg';

const testItems = [
	{
		id: 1,
		name: 'American sub',
		description:
			'Traditionally uses sliced turkey breast, ham, roast beef, American or cheddar cheese, chopped or shredded lettuce, tomatoes and green peppers on a roll of bread.',
		image: tempImage,
	},

];

const ItemList = () => {
	console.log(window.location.pathname);
	return (
		<Grid container spacing={3} justify='center'>
			{testItems.map(({ id, name, description, image }) => (
				<Grid item key={id}>
					<Item name={name} description={description} image={image} />
				</Grid>
			))}
		</Grid>
	);
};

export default ItemList;
