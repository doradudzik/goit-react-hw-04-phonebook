import { useState } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value.trim());
    } else if (name === 'number') {
      setNumber(value.trim());
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (name === '' || number === '') {
      alert('Please fill in all fields');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    addContact(newContact);

    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        className={css.input}
      />
      <label>Number:</label>
      <input
        type="tel"
        value={number}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        className={css.input}
      />
      <button type="submit" className={css.btnInput}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
