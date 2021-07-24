import React from 'react';
import LoginForm from '../components/userForms/LoginForm';
import './views.scss';

const LoginView = () => (
  <div className="views_container">
    <section className="app-section">
      <h2 className="views_title">Login </h2>
      <LoginForm />
    </section>
  </div>
);

export default LoginView;
