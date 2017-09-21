import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoTable extends Component {
	renderTable(){
		return this.props.todos.map((todos) => {
			return (
				<tr>
					<td key={todos.item}>{todos.item}</td>
					<td key={todos.Category}>{todos.Category}</td>
					<td key={todos.FinishBy}>{todos.FinishBy}</td>
				</tr>
				////<li key={bands.name} className="list-group-item">{bands.name}</li>
			);
		});
	}

	render(){
		return (
			<table>
				<thead>
					<tr>
						<th>Items</th>
						<th>Category</th>
						<th>FinishBy</th>
					</tr>
				</thead>
				<tbody>
				{this.renderTable()}
				</tbody>
			</table>
		);
	}

}
function mapStateToProps(state){
	return{
		todos: state.todos,
	};
}
export default connect(mapStateToProps)(TodoTable);