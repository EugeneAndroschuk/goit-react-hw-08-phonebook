import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/thunks';
import { getContacts } from 'redux/selectors';
import { Paper, TextField, Button } from '@mui/material';
import css from './ContactForm.module.css';

const ContactForm = (props) => {
  const[name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contactsFromStore = useSelector(getContacts);
  const patternNumber = '[0-9]{3}-[0-9]{2}-[0-9]{2}';
  
  // \+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}
  // ^\+\d{2} \(\d{3}\) \d{3}-\d{2}-\d{2}$

  const handleFormSubmit = e => {
    e.preventDefault();

    const isExist = contactsFromStore.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in Contacts!`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
    props.onCloseModal();
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name': setName(value);
        break;
      case 'number': setNumber(value);
        break;
      default: break;
    }
  };

    return (
      <Paper elevation={24} className={css.form}>
        <form onSubmit={handleFormSubmit}>
          <h2 className={css.formTitle}>enter CONTACT DATA</h2>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Name"
            name="name"
            value={name}
            autoComplete="name"
            autoFocus
            onChange={handleInputChange}
            inputProps={{
              pattern:
                "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
              title:
                "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
            }}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            type="tel"
            label="number"
            name="number"
            value={number}
            autoComplete="phone number"
            autoFocus
            onChange={handleInputChange}
            inputProps={{
              pattern: `${patternNumber}`,
              title:
                'Phone number must be in 111-11-11 format',
            }}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Contact
          </Button>
        </form>
      </Paper>
    );
}

ContactForm.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default ContactForm;
