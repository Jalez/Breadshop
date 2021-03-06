/** @format */

const breadOrderIdCache = 'breadOrderIdCache';

/**
 * Saves the given id to local storage breadOrderIdCache
 *
 * @param {String} id the id of the item to be stored in localStorage
 */
export const orderIdToCache = (id) => {
	const retrievedCache =
		localStorage.getItem(breadOrderIdCache)?.split(',') || [];
	retrievedCache.push(id);
	localStorage.setItem(breadOrderIdCache, retrievedCache.toString());
};

/**
 * Used to retrieve the ids from local storage.
 * @returns {Array}
 */
export const getCacheIds = () => {
	return localStorage.getItem(breadOrderIdCache)?.split(',') || [];
};

/**
 * Removes the given Id from local storage breadOrderIdCache
 * @param {String} id
 */
export const removeOrderFromCache = (id) => {
	const retrievedCache = localStorage.getItem(breadOrderIdCache).split(',');
	const filteredCache = retrievedCache.filter((item) => item !== id);
	localStorage.setItem(breadOrderIdCache, filteredCache.toString());
};
