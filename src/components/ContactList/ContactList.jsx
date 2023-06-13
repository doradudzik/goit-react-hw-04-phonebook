import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
