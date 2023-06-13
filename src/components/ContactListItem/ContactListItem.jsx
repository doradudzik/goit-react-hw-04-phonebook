import React from 'react';
import css from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, handleDelete }) => {
  return (
    <li className={css.item} id={id}>
      {name}: {number}
      <button className={css.btn} id={id} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
