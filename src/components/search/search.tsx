import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

type SearchProps = TextFieldProps & {
  label: string;
  width?: string;
};

const Search: React.FC<SearchProps> = ({ label, width }) => (
  <Stack spacing={2} sx={{ width }}>
    <TextField label={label} inputProps={{ type: 'search' }} />
  </Stack>
);

Search.defaultProps = {
  width: '100%',
};

export default Search;
