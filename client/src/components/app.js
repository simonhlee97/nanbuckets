import React, { Component } from 'react';
import NavBarHeader from './Nav';
import Video from './video/video';
import BandList from '../containers/BandList';
import TodoTable from '../containers/TodoTable';

export default class App extends Component {
	render() {
		return (

			<div>
				<NavBarHeader />
				<BandList />
				<TodoTable />
			</div>
		);
	}
}