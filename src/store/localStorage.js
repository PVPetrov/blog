export const loadState = () => {
	try {
		return JSON.parse(localStorage.getItem('redux-state')) || undefined;
	} catch (err) {
		console.log(err);
		return undefined;
	}
};

export const saveState = state => {
	try {
		localStorage.setItem('redux-state', JSON.stringify(state));
	} catch (err) {
		console.log(err);
	}
};
