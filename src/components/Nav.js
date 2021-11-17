import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Menu,
  Responsive,
  Image,
  Grid,
  Button,
  Container
} from 'semantic-ui-react';
import { setAuthUser } from '../actions/authUser';

class Nav extends Component {
  handleLogout = e => {
    e.preventDefault();
    this.props.setAuthUser(null);
  };

  render() {
    const { authUser, users } = this.props;

    return (
    
     <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            New Poll
          </NavLink>
        </li>
      </ul>
     </nav>
  )
}
    
}

function mapStateToProps({ users, authUser }) {
  return {
    authUser,
    users
  };
}

export default connect(
  mapStateToProps,
  { setAuthUser }
)(Nav);
