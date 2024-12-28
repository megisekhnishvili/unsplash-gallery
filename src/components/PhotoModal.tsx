import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

interface PhotoModalProps {
  photo: { urls: { full: string }; description: string | null } | null;
  open: boolean;
  onClose: () => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ photo, open, onClose }) => {
  if (!photo) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ p: 4, backgroundColor: 'white', margin: 'auto', maxWidth: 600, textAlign: 'center' }}>
        <img src={photo.urls.full} alt={photo.description || 'Full Photo'} style={{ maxWidth: '100%' }} />
        <Typography variant="body1" mt={2}>
          {photo.description || 'No description available'}
        </Typography>
      </Box>
    </Modal>
  );
};

export default PhotoModal;
