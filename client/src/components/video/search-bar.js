import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: 'austin powers' };
	}
	render() {
		return(
			<div className="search-bar">
				<label className="vidSearchLbl">
					Get Buckets:
				</label>
				<input
					value={this.state.term}
					onChange={(event) => this.onInputChange(event.target.value) }/>
				<button>Search</button>
			</div>
		);
	}
	onInputChange(term) {
		this.setState({term});
		this.this.props.onSearchTermChange(term);
	}
}
export default SearchBar;