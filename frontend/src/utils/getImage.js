/** @format */

export const getImage = (name, format) => {
	return (
		process.env.PUBLIC_URL + '/images/' + name + '.' + (format ? format : 'jpg')
	);
};
