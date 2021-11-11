import PropTypes from 'prop-types'
import ContactListItem from '../ContactsListItem/ContactSListItem'


const ContactList = ({contacts, ContactsDelete}) => {
    return(
        <ul>
        {contacts.map(({id, name, number}) => (
        <li key={id}>
            <ContactListItem
                id={id}
                name={name}
                number={number}
                onClick={ContactsDelete}
            />
        </li>          
    ))}
    </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default ContactList