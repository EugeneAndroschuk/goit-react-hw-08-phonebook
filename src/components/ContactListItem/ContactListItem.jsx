import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Avatar,
  Typography,
  Box,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Dialog,
  DialogContent,
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import {
  DeleteForeverOutlined,
  EditOutlined,
  Share,
  PhoneAndroidOutlined,
  AlternateEmailOutlined,
  StarBorderOutlined,
  StarOutlined,
} from '@mui/icons-material';
import ContactFormEdit from 'components/ContactFormEdit/ContactFormEdit';

const ContactListItem = (props) => {
  const { contact, onDeleteContact, onMakeFavorite } = props;
  const [isFavorite, setIsFavorite] = useState(contact.favorite);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const actions = [
    {
      icon: (
        <DeleteForeverOutlined
          onClick={() => onDeleteContact(contact._id)}
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
          onClick={() => onEditContact(contact._id)}
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

  // const onHandleFavorite = (id) => {
  //   onMakeFavorite(id, !isFavorite);
  //   setIsFavorite(!isFavorite);
  // }

  function stringAvatar(name) {
    const formattedName = name.split(' ');
    if (formattedName.length === 1) return {
      children: `${name.split(' ')[0][0]}`,
    }; else return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Card sx={{ padding: '16px', width: '300px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          paddingTop: '8px',
          paddingBottom: '8px',
        }}
        onClick={()=>{onMakeFavorite(contact._id, !isFavorite);
          setIsFavorite(!isFavorite);
        }}
      >
        {contact.favorite ? (
          <StarOutlined fontSize="large" sx={{ color: 'blue' }} />
        ) : (
          <StarBorderOutlined fontSize="large" sx={{ color: 'blue' }} />
        )}
      </Box>

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
            bgcolor: 'yellow',
            marginRight: '10px',
          }}
        >
          <AlternateEmailOutlined fontSize="large" />
        </Avatar>
        <Typography variant="h5" component="span">
          {contact.email}
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
          {contact.phone}
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

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DialogContent>
          <ContactFormEdit onCloseModal={handleClose} contact={contact} />
        </DialogContent>
      </Dialog>
    </Card>
  );
};

ContactListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactListItem;