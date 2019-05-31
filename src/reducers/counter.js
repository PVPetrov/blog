import * as c from '../constants';

const counter = (state = 0, { type }) => {
	switch (type) {
		case c.INCREASE:
			return state + 1;
		case c.DECREASE:
			return state - 1;
		default:
			return state;
	}
};

export default counter;
