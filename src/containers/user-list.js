import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SelectUser } from '../actions/index';

class UserList extends Component {
  renderList() {
      return (
        this.props.users.map((user) => <li
          key={user.name}
          onClick={() => this.props.SelectUser(user)}
          style={{ cursor: 'pointer' }}
        >
          {user.name}
        </li>)
      );
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ SelectUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
