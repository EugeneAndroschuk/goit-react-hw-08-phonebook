import { useState } from "react";
import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";
import { styled } from "@mui/material";
import {
  Divider,
  IconButton,
  Tooltip,
} from '@mui/material';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import ModalWindow from "components/ModalWindow/ModalWindow";
import commonCss from '../css/common.module.css';
import css from "./Pages.module.css";

const ColorButton = styled(IconButton)(({ theme }) => ({
  // backgroundColor: 'orange',
  '&:hover': {
    backgroundColor: 'orangered',
  },
}));

const Contacts = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
      <div className={commonCss.container}>
        <ModalWindow isOpenModal={open}>
          <ContactForm onCloseModal={handleClose} />
        </ModalWindow>

        <div className={css.filter}>
          <Filter />
        </div>

        <Divider sx={{ marginBottom: '16px' }} />

        <div className={css.contactList}>
          <ContactList />
        </div>

        <Tooltip title="Add New Contact" placement="top">
          <ColorButton
            aria-label="add contact"
            sx={{
              bgcolor: 'orange',
              width: '108px',
              height: '108px',
              position: 'fixed',
              bottom: '32px',
              right: '32px',
            }}
            onClick={handleOpen}
          >
            <ContactPhoneOutlinedIcon fontSize="large" />
          </ColorButton>
        </Tooltip>
      </div>
    );
}

export default Contacts;