import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Avatar,
  Typography,
  Box,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import {
  DeleteForeverOutlined,
  EditOutlined,
  Share,
  PhoneAndroidOutlined,
} from '@mui/icons-material';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import ContactFormEdit from 'components/ContactFormEdit/ContactFormEdit';

const ContactListItem = (props) => {
  const { contact, onDeleteContact } = props;
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const actions = [
    {
      icon: (
        <DeleteForeverOutlined
          onClick={() => onDeleteContact(contact.id)}
          fontSize="large"
          sx={{ color: 'red' }}
        />
      ),
      name: 'Delete Contact',
    },
    {
      icon: (
        <EditOutlined
          fontSize="large"
          sx={{ color: 'green' }}
          onClick={()=>onEditContact(contact.id)}
        />
      ),
      name: 'Edit Contact',
    },
    {
      icon: <Share fontSize="large" sx={{ color: 'blue' }} />,
      name: 'Share Contact',
    },
  ];

  function onEditContact(id) {
    setOpen(true);
 };

  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Card sx={{ padding: '16px', width: '300px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          {...stringAvatar(`${contact.name}`)}
          sx={{
            width: 56,
            height: 56,
            bgcolor: deepOrange[500],
            marginRight: '10px',
          }}
        />
        <Typography variant="h5" component="span">
          {contact.name}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingTop: '8px',
          paddingBottom: '8px',
        }}
      >
        <Avatar
          sx={{
            width: 56,
            height: 56,
            bgcolor: 'green',
            marginRight: '10px',
          }}
        >
          <PhoneAndroidOutlined fontSize="large" />
        </Avatar>
        <Typography variant="h5" component="span">
          {contact.number}
        </Typography>
      </Box>

      <SpeedDial
        ariaLabel="SpeedDial basic example"
        // sx={{ width: 36, height: 36 }}
        icon={<SpeedDialIcon />}
        direction={'right'}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>

      <ModalWindow isOpenModal={open}>
        <ContactFormEdit onCloseModal={handleClose} contact={contact} />
      </ModalWindow>
    </Card>
  );
};

ContactListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactListItem;