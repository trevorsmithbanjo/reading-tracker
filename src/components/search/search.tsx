import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

type SearchProps = {
  label: string;
};

const Search: React.FC<SearchProps> = ({ label }) => (
  <Stack spacing={2}>
    <TextField label={label} inputProps={{ type: 'search' }} />
  </Stack>
);

export default Search;
