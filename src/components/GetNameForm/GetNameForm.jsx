import { Component } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
import styles from '../GetNameForm/GetNameForm.module.css';

// const schema = yup.object().shape({
//     name: yup.string().min(6).max(25).required(),
// })

class GetNameForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChangeName = e => {
        this.setState({ name : e.currentTarget.value });
    };

    handleChangeNumber = e => {
        this.setState({ number : e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.name, this.state.number)
        this.setState({name: ''})
        this.setState({number: ''})
    }

  render() {
    return ( 

        <form className={styles.FormBox} 
        onSubmit={this.handleSubmit}>
            <label className={styles.Label}>
                Name
            <input
                className={styles.InputField}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={this.handleChangeName}
                required
                />
            </label>
            <label className={styles.Label}>
                Number
            <input
                className={styles.InputField}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={this.handleChangeNumber}
                required
                />
            </label>
            <button type="submit" className={styles.SubmitButton}>Add contact</button>
        </form>
        // <Formik initialValues={this.state.name}
        //         validationSchema={schema}
        //         onSubmit={this.handleSubmit}
        //         >
        // {({ handleChange, isSubmitting, values }) => (
        //     <Form className={styles.FormBox}> 
        //     <label className={styles.Label}>
        //         Name
        //         <Field
        //             className={styles.InputField}
        //             type="text"
        //             name="name"
        //             value={values.name}
        //             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        //             onChange={this.handleChange('name')}
        //             required
        //         />
        //     </label>
        //     <ErrorMessage name="name" component="div"/>
        //     <button type="submit" disabled={isSubmitting} className={styles.SubmitButton}>Add contact</button>
        // </Form> )}
        // </Formik>
    )
  }
}

export default GetNameForm;