import { combineReducers } from 'redux';
import BandsReducer from './reducer_bands';

// challenge prob
import TableReducer from './reducer_todos';

//Define the properties of our Application State here

	const rootReducer = combineReducers({
		bands: BandsReducer,
		todos: TableReducer
	});

export default rootReducer;