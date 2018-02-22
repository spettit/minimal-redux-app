import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedUser extends Component {
  render() {
    return (
      <div>User is: {this.props.selectedUser? this.props.selectedUser.name : 'unknown'}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedUser: state.selectedUser
  };
}

export default connect(mapStateToProps)(SelectedUser);
