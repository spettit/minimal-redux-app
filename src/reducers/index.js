import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import SelectedUser from './selected-user';

const rootReducer = combineReducers({
  users: UsersReducer,
  selectedUser: SelectedUser
});

export default rootReducer;
