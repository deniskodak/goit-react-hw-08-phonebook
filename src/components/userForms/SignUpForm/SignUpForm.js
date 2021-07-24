import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { authOps } from '../../../redux/auth';
import styles from './SignUpForm.module.scss';

class SignUpForm extends Component {
  state = {
    name: '',
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

    this.props.onSignUp(this.state);
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.label}>
          {' '}
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            autoComplete="off"
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>
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
          Sign Up!
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onSignUp: authOps.signUp,
};
export default connect(null, mapDispatchToProps)(SignUpForm);
