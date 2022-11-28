import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
// import { nanoid } from 'nanoid';
import styles from '../FormName/FormName.module.css';

const schema = yup.object().shape({
    name: yup.string().min(6).max(25).required(),
})

const initialValues = {
    name: '',
}

export const FormName = () => {

    const handleSubmit = (values, { resetForm }) => {
        resetForm();
        console.log(values);
        }

    return (
        <Formik initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
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
    )
}