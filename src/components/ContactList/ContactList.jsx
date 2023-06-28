import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css'

export default class ContactList extends Component {
  deleteContact = (id) => {
    this.props.onDelete(id);
  };

  render() {
    const { contacts } = this.props;

    return (
      <ul>
        {contacts.map(({id, name, number}) => (
          <li key={id}>
            {name}: {number}
            <button type="button" onClick={() => this.deleteContact(id)} className={css.buttonList}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
};