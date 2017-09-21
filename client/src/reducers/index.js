import { combineReducers } from 'redux';
import BandsReducer from './reducer_bands';
import SelectedBand from './reducer_selectedband';
import {reducer as formReducer} from 'redux-form';
// challenge prob
import TableReducer from './reducer_todos';

//Define the properties of our Application State here

	const rootReducer = combineReducers({
		
		SelectedBand: SelectedBand,
		form: formReducer
	});

export default rootReducer;