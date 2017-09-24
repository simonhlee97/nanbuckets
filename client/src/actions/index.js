import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR, CREATE_POSTS} from './types';
import authReducer from '../reducers/auth_reducer';

const ROOT_URL = 'http://localhost:3000';


export function	signupUser ({email, password}) {
	return function (dispatch){
		axios.post(`${ROOT_URL}/signup`, {email, password})
			.then(response => {
				dispatch({type: AUTH_USER});

				//update the token
				localStorage.setItem('token', response.data.token);
				browserHistory.push('/newitem');
			})
			.catch(response => dispatch(authError(response.data.error)));
	}
}

export function signinUser({ email, password }){
	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`, {email, password})
			.then(response => {
				dispatch({ type: AUTH_USER });

				localStorage.setItem('token', response.data.token);
				browserHistory.push('/newitem');
			})
				.catch(response => dispatch(authError("bad login info")));
	}
}

export function AuthError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}

export function signoutUser(){
	localStorage.removeItem('token');

	return {type: UNAUTH_USER};
}

export function createPost(props){
	return function(dispatch){
		axios.post(`${ROOT_URL}/newitem`, {props}, config)
		.then(request => {
			dispatch({
				type: CREATE_POSTS,
				payload: request
			});
		browserHistory.push('/newitem');	
	});
	}
}