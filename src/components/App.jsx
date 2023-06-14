import css from './App.module.css';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

import { useEffect, useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const existingContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
    );

    if (existingContact) {
      alert(`${existingContact.name} is already in contacts`);
    } else {
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };
  const handleChange = evt => {
    const { value } = evt.target;
    setFilter(value);
  };

  const handleDelete = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
};
