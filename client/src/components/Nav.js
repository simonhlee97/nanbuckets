import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class NavBarHeader extends Component {
	renderLinks(){
		if(this.props.authenticated){
			return <NavItem href="/signout">Sign Out</NavItem>
		}else{
			return [
			  <NavItem key={1} href="/signin">Sign In</NavItem>,
		      <NavItem key={2} href="/signup">Sign Up</NavItem>
			];
		}
	}

	render() {
		return (
			<Navbar>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="#">BucketList</a>
		      </Navbar.Brand>
		    </Navbar.Header>
		    <Nav>
		      {this.renderLinks()}
	      	</Nav>
		  </Navbar>
		);
	}
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(NavBarHeader);