import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm'
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (data) => {
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (existingContact) {
      alert('A contact with this name already exists!');
    } else {
      const newContact = {
        id: nanoid(),
        name: data.name,
        number: data.number,
      };
      setContacts([...contacts, newContact]);
    }
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const onChange = (filter) => {
    setFilter(filter);
  };

  const getContactsBySearch = () => {
    const filteredItems = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredItems;
    };
    
    useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localContacts)
    if (parsedContacts) {
        setContacts(parsedContacts)
    }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onChange={onChange} />
      <ContactList contacts={getContactsBySearch()} onDelete={deleteContact} />
    </div>
  );
}
