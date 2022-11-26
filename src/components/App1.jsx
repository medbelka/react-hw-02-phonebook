import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
// import { FormName } from 'components/FormName/FormName';
import styles from './FormName/FormName.module.css';
import { Contacts } from '../components/Contacts/Contacts';


// import { ContactsList } from 'components/ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    // name: '',
    // number: '',
  }

  initialValues = {
    name: '',
}

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }
//   addContact = name => {
//     const contact = {
//           // id: nanoid(),
//           name
//           }
//           this.state(({contacts}) => ({contacts: [contact, ...contacts]
//       }))
//     console.log(this.state);
//   }

  handleSubmit = (values, { resetForm }) => {
    // e.preventDefault();
    // this.props.onSubmit(this.state);
    const contact = {
        id: nanoid(),
        values
        }
        this.setState(({contacts}) => ({contacts: [contact, ...contacts]
    }))
    resetForm();
    console.log(values);
    // this.props.onSubmit(values);
    }

  schema = yup.object().shape({
      name: yup.string().min(6).max(25).required(),
  })
  

render () {
  const { contacts } = this.state;
  return (
        <div>
          <h1>Phonebook</h1>
          {/* <FormName onSubmit={this.addContact}/> */}
            <Formik initialValues={this.initialValues}
                    validationSchema={this.schema}
                    onSubmit={this.handleSubmit}
                    >
            {({ handleChange, isSubmitting, values }) => (
                <Form className={styles.FormBox}> 
                <label className={styles.Label}>
                    Name
                    <Field
                        className={styles.InputField}
                        type="text"
                        name="name"
                        value={values.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        onChange={handleChange('name')}
                        required
                    />
                </label>
                <ErrorMessage name="name" component="div"/>
                <button type="submit" disabled={isSubmitting} className={styles.SubmitButton}>Add contact</button>
              </Form> )}
            </Formik>
          <h2>Contacts</h2>
          <Contacts contacts={ contacts } onDeleteContact={this.deleteContact} />
          {/* <div>
            <ul>
              {this.state.contacts.map(({ name, id, number }) => 
            (   <li key={id}>
                    <span>{name}</span>
                    <span>{number}</span>
                </li>
            ))}
            </ul>
          {/* <ContactsList contacts={this.state.name}/> */}
          {/* {{[this.state.contacts] : []}? 'There is no contacts yet' : <ContactsList contacts={this.state.name}/>} */}
        </div>)
      }
    };

export default App;