import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import GetNameForm from '../components/GetNameForm/GetNameForm';
import { Contacts } from '../components/Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts]
    }))
  }

render () {
  const { contacts } = this.state;
  return (
        <div>
          <h1>Phonebook</h1>
          <GetNameForm onSubmit={this.addContact}/>
          <h2>Contacts</h2>
          <Contacts contacts={ contacts } onDeleteContact={this.deleteContact} />
        </div>
      );
    }
};

export default App;