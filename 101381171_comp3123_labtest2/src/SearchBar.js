import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ setCity }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setCity(input);
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={8} md={6}>
        <TextField
          fullWidth
          label="Enter city name"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 2 }}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={2}>
        <Button variant="contained" fullWidth onClick={handleSearch} sx={{ borderRadius: 2, backgroundColor: '#2196f3' }}>
          <SearchIcon sx={{ color: '#fff' }} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
