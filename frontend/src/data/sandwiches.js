/** @format */

const getImage = (name) => {
	return process.env.PUBLIC_URL + '/images/' + name + '.jpg';
};

const sandWiches = [
	{
		id: 1,
		name: 'American sub',
		description:
			'Traditionally uses sliced turkey breast, ham, roast beef, American or cheddar cheese, chopped or shredded lettuce, tomatoes and green peppers on a roll of bread.',
		image: getImage('sub'),
		price: 4.5,
	},
	{
		id: 2,
		name: 'Club sandwich',
		description: "For the guys that go clubbin'",
		image: getImage('sub2'),
		price: 2.5,
	},
	{
		id: 3,
		name: 'Cheesesteak',
		description:
			'Thinly sliced steak and melted cheese in a hoagie roll, with additional toppings often including peppers, onions, and mushrooms, also known as a Philadelphia or Philly cheesesteak.',
		image: getImage('sub3'),
		price: 1.33,
	},
];

export default sandWiches;
