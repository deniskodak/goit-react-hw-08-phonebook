import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Form from '../components/phoneContacts/Form';
import Filter from '../components/phoneContacts/Filter';
import ContactsList from '../components/phoneContacts/Contacts';

const ContactsView = () => (
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

export default ContactsView;
