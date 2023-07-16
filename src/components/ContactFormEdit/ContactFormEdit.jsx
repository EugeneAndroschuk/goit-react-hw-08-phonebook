import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/thunks';
import { getContacts } from 'redux/selectors';
import { Paper, TextField, Button } from '@mui/material';
import css from "./ContactFormEdit.module.css"

const ContactFormEdit = ({ contact, onCloseModal }) => {
  const [name, setName] = useState(contact.name);
  const [phone, setNumber] = useState(contact.phone);
  const [email, setEmail] = useState(contact.email);
  const dispatch = useDispatch();
  const contactsFromStore = useSelector(getContacts);

  const handleFormSubmit = e => {
    e.preventDefault();

    const isExist = contactsFromStore.some(
      item => (item.name.toLowerCase() === name.toLowerCase()) && (item._id !== contact._id)
    );

    if (isExist) {
      alert(`${name} is already in Contacts!`);
      return;
    }

    dispatch(updateContact({ contactId: contact._id, name, phone, email }));
    setName('');
    setNumber('');
    setEmail('');
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
      case 'email':
        setEmail(value);
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
          pattern="^[A-Z]+[a-z]+ [A-Z]+[a-z]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          label="Email"
          name="email"
          value={email}
          autoComplete="email"
          autoFocus
          onChange={handleInputChange}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          type="tel"
          label="number"
          name="number"
          value={phone}
          autoComplete="phone number"
          autoFocus
          onChange={handleInputChange}
          pattern="^([(]d{3}[)])+ d{3}-d{4}$"
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
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactFormEdit;
