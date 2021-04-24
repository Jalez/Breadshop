/** @format */

import React from 'react';
import FlexPaper from './FlexPaper';

const About = () => {
	let about;

	const renderAlternativeInfo = () => (
		<p style={{ textAlign: 'center' }}>
			It looks like you have no info in your About us-page yet. Stop being LAZY
			and add some!
		</p>
	);

	return (
		<FlexPaper header='About us'>
			{about ? about : renderAlternativeInfo()}
		</FlexPaper>
	);
};

export default About;
