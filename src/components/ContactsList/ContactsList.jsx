import { Contact } from '../Contact/Contact';

export const ContactsList = ({ contacts }) => {
    return (
        <ul >
            {contacts.map(({ name, id }) => 
            (   <Contact 
                    key={id}
                    name={name}
                />
            ))}
        </ul>
    );
};