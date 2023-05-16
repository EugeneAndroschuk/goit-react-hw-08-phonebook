import { useState, useEffect } from 'react';
import { Modal, Box } from '@mui/material';

const ModalWindow = ({ children, isOpenModal }) => {
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setOpen(isOpenModal);
   }, [isOpenModal]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default ModalWindow;