import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { phoneBookOps } from '../redux/contacts';

import Form from '../components/contactsComponents/Form';
import Filter from '../components/contactsComponents/Filter';
import ContactsList from '../components/contactsComponents/Contacts';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className="container">
        <CSSTransition
          in={true}
          appear={true}
          timeout={250}
          classNames="container-fade"
        >
          <section className="app-section">
            <h1 className="app-title">Phonebook</h1>
            <Form />
            <h2 className="app-title top-margin">Filter your contacts</h2>
            <Filter />
          </section>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="container-next-fade"
        >
          <section className="app-section">
            <h2 className="app-title">Contacts</h2>
            <ContactsList />
          </section>
        </CSSTransition>
      </div>
    );
  }
}

ContactsView.propTypes = {
  fetchContacts: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchContacts: phoneBookOps.getContacts,
};
export default connect(null, mapDispatchToProps)(ContactsView);
