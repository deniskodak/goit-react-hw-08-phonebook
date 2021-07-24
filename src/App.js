import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
import { Route } from 'react-router';
import { getContacts } from './redux/operations/operations';

import AppBar from './components/AppBar';
import HomeView from './Views/HomeVIew';
import ContactsView from './Views/ContactsView';
import SignUpView from './Views/SignUpView';
import LoginView from './Views/LoginView';

class App extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return (
      <>
        <AppBar />
        <Route exact path="/" component={HomeView} />
        <Route path="/contacts" component={ContactsView} />
        <Route path="/register" component={SignUpView} />
        <Route path="/login" component={LoginView} />
      </>
    );
  }
}

App.propTypes = {
  getContacts: PropTypes.func.isRequired,
};
const mdtp = dispatch => ({
  getContacts: () => dispatch(getContacts()),
});
export default connect(null, mdtp)(App);
