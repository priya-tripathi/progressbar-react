import * as actionTypes from "../models/config.js";

export const initialState = {
	buttons: [],
	barValues: [],
	limit: 100,
	selectedBarIndex: 0,
};

const progressBarAPI = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_DATA: {
			const { data } = action.payload;
			const configuration = {
				buttons: data.buttons.slice(),
				barValues: data.bars.slice(),
				limit: data.limit,
			};
			console.log({ ...state, ...configuration });
			return { ...state, ...configuration };
		}
		case actionTypes.CHANGE_PROGRESS_BAR: {
			return { ...state, selectedBarIndex: action.payload };
		}
		case actionTypes.CHANGE_BAR_VALUE: {
			const { selectedBarIndex, barValues } = state;
			const currentBarValues = barValues.slice();
			currentBarValues[selectedBarIndex] =
				currentBarValues[selectedBarIndex] + action.payload < 0
					? 0
					: currentBarValues[selectedBarIndex] + action.payload;

			return { ...state, barValues: currentBarValues };
		}

		default:
			return state;
	}
};

export default progressBarAPI;
