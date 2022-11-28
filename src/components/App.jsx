import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from '../components/Filter/Filter';
import GetNameForm from '../components/GetNameForm/GetNameForm';
import { Contacts } from '../components/Contacts/Contacts';
import styles from '../components/App.module.css';

class App extends Component {
  state = {
    contacts: [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  addContact = (name, number) => {
    const existingContact = this.state.contacts.find(contact=>
      contact.name === name )
      console.log(existingContact)
    if (existingContact) {
      console.log("if work")
      alert(`${name} is already in contacts`)
    }
      else {
      const newContact = {
        id: nanoid(),
        name,
        number,
      }
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts]
      })) }
  }

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }

  getVisibleContacts = () =>{
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
      );
  }


render () {
  const { filter } = this.state;
  const visibleContacts = this.getVisibleContacts();
  return (
        <div className={styles.container}>
          <h1>Phonebook</h1>
          <GetNameForm onSubmit={this.addContact}/>
          <Filter value={filter} onChange={this.changeFilter}/>
          <h2>Contacts</h2>
          <Contacts contacts={ visibleContacts } onDeleteContact={this.deleteContact} />
        </div>
      );
    }
};

export default App;