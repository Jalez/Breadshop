/** @format */

import { Box, Grid, Paper } from '@material-ui/core';
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
	{
		id: 2,
		name: 'Bacon',
		description: 'Often eaten with ketchup or brown sauce',
		image: tempImage,
	},
	{
		id: 3,
		name: 'Bagel toast',
		description:
			'Pressed, toasted bagel filled with vegetables and cheese and grilled on a sandwich toaster or panini press.',
		image: tempImage,
	},
	{
		id: 4,
		name: 'Baloney Salad sandwich',
		description:
			'A mixture of bologna sausage and sweet gherkin pickles is processed through a meat grinder. Mayonnaise or Miracle Whip is added to the mixture. The salad mixture is left to meld flavors for several hours and then spread thickly on "sandwich bread". Some recipes call for adding minced white onion or hard boiled egg to the salad. Ham is sometimes substituted for the bologna, in which case it becomes a ham salad sandwich.',
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
