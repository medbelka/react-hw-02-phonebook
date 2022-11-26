import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import { FormName } from 'components/FormName/FormName';
import { ContactsList } from 'components/ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [],
    
  }

  addContact = name => {
    const contact = {
          // id: nanoid(),
          name
          }
          this.state(({contacts}) => ({contacts: [contact, ...contacts]
      }))
    console.log(name);
  }

render () {
  return (
        <div>
          <h1>Phonebook</h1>
          <FormName onSubmit={this.addContact}/>
          <h2>Contacts</h2>
          <div>
          {{[this.state.contacts] : []}? 'There is no contacts yet' : <ContactsList contacts={this.state.name}/>}
          </div>
        </div>
      );
    }
};

export default App;