import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './LoginForm.module.scss';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          {' '}
          Email
          <input
            className={styles.input}
            type="email"
            name="email"
            autoComplete="off"
            required
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.label}>
          {' '}
          Password
          <input
            className={styles.input}
            type="password"
            name="password"
            autoComplete="off"
            required
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
