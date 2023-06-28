import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css'

export default function ContactList({onDelete, contacts }) {
    const deleteContact = (id) => {
      onDelete(id);
    };
  return (
      
        <ul>
        {contacts.map(({id, name, number}) => (
          <li key={id}>
            {name}: {number}
            <button type="button" onClick={()=>deleteContact(id)} className={css.buttonList}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
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