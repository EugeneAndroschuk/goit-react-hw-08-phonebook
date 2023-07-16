import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/thunks';
import { getContacts, getIsLoading, getFilter } from 'redux/selectors';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import Loader from 'components/Loader/Loader';
import { Grid } from '@mui/material';

const ContactList = () => {
  const contactsFromStore = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const filterQuery = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = getFilteredContacts(contactsFromStore);
  
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  function getFilteredContacts(contacts) {
    const normFilter = filterQuery.toLowerCase();

      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normFilter)
      );
  }

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {filteredContacts.length > 0 &&
          filteredContacts.map(contact => (
            <Grid item xs={6} sm={4} md={4} key={contact._id}>
              <ContactListItem
                contact={contact}
                onDeleteContact={onDeleteContact}
              />
            </Grid>
          ))}
      </Grid>
      {isLoading && <Loader />}
    </>
  );
}

export default ContactList;