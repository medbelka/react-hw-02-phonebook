import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from '../FormName/FormName.module.css';

class FormName extends Component {
    state = {
        name: '',
        // id: '',
    };

    nameId = nanoid();
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
        }
    reset = () => {
        this.setState ({name: ''})
    }

render() {
    return (
        <form
        className={styles.FormBox} 
        onSubmit={this.handleSubmit}>
            <label 
            className={styles.Label}
            htmlFor={this.nameId}>
                Name
            <input
                className={styles.InputField}
                type="text"
                name="name"
                value={this.state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={this.handleChange}
                required
            />
            </label>
            <button className={styles.SubmitButton}>Add contact</button>
        </form>
    )
}
}
export default FormName;