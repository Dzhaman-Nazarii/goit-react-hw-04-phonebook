import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  
  addContact = (data) => {
    const { contacts } = this.state;
    const existingContact = contacts.find((contact) => contact.name.toLowerCase() === data.name.toLowerCase());
    
    if (existingContact) {
      alert('A contact with this name already exists!');
    } else {
      const newContact = {
        id: nanoid(),
        name: data.name,
        number: data.number,
      };
      
      this.setState({
        contacts: [...contacts, newContact]
      });
    }
  };

  deleteContact = (id) => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: updatedContacts
    });
  };

  onChange = (filter) => {
    this.setState({ filter });
  };

  getContactsBySearch = () => {
      const filteredItems = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
    return filteredItems;
  };

  componentDidMount() {
    // console.log('App componentDidMount');
    const localContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localContacts)
    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');
    if (this.state.contacts !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.onChange} />
        <ContactList contacts={this.getContactsBySearch()} onDelete={this.deleteContact} />
      </div>
    );
  }
}