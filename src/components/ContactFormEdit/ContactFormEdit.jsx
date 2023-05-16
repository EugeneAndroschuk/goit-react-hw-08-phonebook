import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/thunks';
import { getContacts } from 'redux/selectors';
import { Paper, TextField, Button } from '@mui/material';
import css from "./ContactFormEdit.module.css"

const ContactFormEdit = ({ contact, onCloseModal }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const dispatch = useDispatch();
  const contactsFromStore = useSelector(getContacts);

  const handleFormSubmit = e => {
    e.preventDefault();

    const isExist = contactsFromStore.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in Contacts!`);
      return;
    }

    dispatch(updateContact({ contactId: contact.id, name, number }));
    setName('');
    setNumber('');
    onCloseModal();
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <Paper elevation={24} className={css.form}>
      <form onSubmit={handleFormSubmit}>
        <h2 className={css.formTitle}>edit CONTACT DATA</h2>
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
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Save Changes
        </Button>
      </form>
    </Paper>
  );
};

ContactFormEdit.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactFormEdit;
