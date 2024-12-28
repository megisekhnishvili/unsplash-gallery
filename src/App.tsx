import React, { useState } from 'react';
import { TextField, Grid, Pagination, Box } from '@mui/material';
import { usePhotos } from './hooks/usePhotos';
import { useDebounce } from './hooks/useDebounce';
import PhotoCard from './components/PhotoCard';
import PhotoModal from './components/PhotoModal';





const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const debouncedQuery = useDebounce(query, 500);
  const { data, isLoading, error } = usePhotos(debouncedQuery, page);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setPage(1); // Reset to the first page on a new search
  };

  return (
    <Box sx={{ p: 3 }}>
      <TextField
        label="Search Photos"
        variant="outlined"
        fullWidth
        onChange={handleSearchChange}
        value={query}
        sx={{ mb: 3 }}
      />

      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading photos</p>}

      <Grid container spacing={2}>
        {data?.results.map((photo) => (
          <Grid item key={photo.id} xs={12} sm={6} md={4}>
            <PhotoCard photo={photo} onClick={() => setSelectedPhoto(photo)} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Pagination
          count={Math.ceil(data?.total / 20) || 1}
          page={page}
          onChange={(e, value) => setPage(value)}
        />
      </Box>

      <PhotoModal photo={selectedPhoto} open={!!selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </Box>
  );
};

export default App;
