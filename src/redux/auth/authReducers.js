import { combineReducers, createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const INITIAL_STATE = { name: '', email: '' };

const user = createReducer(INITIAL_STATE, {
  [authActions.loginUserSuccess]: (_, { payload }) => payload.user,
  [authActions.signUpUserSuccess]: (_, { payload }) => payload.user,
  [authActions.logOutSuccess]: () => INITIAL_STATE,
});
const error = createReducer(null, {
  [authActions.loginUserSuccess]: () => null,
  [authActions.signUpUserSuccess]: () => null,
  [authActions.logOutSuccess]: () => null,
  [authActions.signUpUserError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.signUpUserSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logOutSuccess]: () => null,
});
export default combineReducers({ user, token, error });
