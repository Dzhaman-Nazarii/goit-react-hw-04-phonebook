import { Component } from 'react'
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
        id: ''
    }

    handleChange = evt => {
        this.setState({[evt.target.name]: evt.target.value})
    }
 
    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state)
        this.reset()
    }

    nameId = nanoid();
    numberId = nanoid();

    reset = () => {
        this.setState({ name: '', number: '', id:''})
    }
        

    render() {
        const{name, number} = this.state
    return (
        <div>
            <form onSubmit={this.handleSubmit} className={css.formContainer}>
                <label htmlFor="this.nameId"></label>
                Name
                <input
                    className={css.formInput}
                    id={this.nameId}
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" 
                    title="Name may contain only  letters, spaces, hyphens, and apostrophes are allowed"
                    required
                />
                <label htmlFor="this.numberId"></label>
                Number
                <input
                    className={css.formInput}
                    id={this.numberId}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Valid Phone Number: Optional '+' Symbol, Digits, Spaces, Hyphens, and Parentheses"
                    required
                />
                <button type="submit" className={css.formButton}>Add contact</button>
            </form>
        </div>
    )
  }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}