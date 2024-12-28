import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface PhotoCardProps {
  photo: { id: string; urls: { small: string }; description: string | null };
  onClick: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onClick }) => {
  return (
    <Card onClick={onClick} sx={{ cursor: 'pointer', maxWidth: 300 }}>
      <CardMedia component="img" image={photo.urls.small} alt={photo.description || 'Photo'} />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {photo.description || 'No description'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PhotoCard;
