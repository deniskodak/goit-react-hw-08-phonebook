import React from 'react';
import { Component } from 'react';
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

  handleSubmit = () => {};
  render() {
    const { email, password } = this.state;
    return (
      <form className={styles.form}>
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

export default LoginForm;
