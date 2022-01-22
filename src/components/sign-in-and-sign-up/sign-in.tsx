import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { grey } from '@mui/material/colors';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { UserSignInState } from './sign-up';

const SignIn: React.FC = () => {
  const [values, setValues] = useState<UserSignInState>({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof UserSignInState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 2,
          width: '70%',
          border: '1px solid',
          borderRadius: '4px',
          margin: '3rem auto',
          borderColor: grey[500],
          padding: '2rem',
        }}
      >
        <Typography variant="h3" component="h2" sx={{ margin: '1rem auto' }}>
          Sign In
        </Typography>
        <TextField
          label="Email"
          id="email"
          sx={{ m: 1 }}
          inputProps={{ type: 'email' }}
          value={values.email}
        />
        <FormControl variant="outlined" sx={{ m: 1 }}>
          <InputLabel htmlFor="password-label">Password</InputLabel>
          <OutlinedInput
            id="password-adornment"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>
    </Container>
  );
};

export default SignIn;
