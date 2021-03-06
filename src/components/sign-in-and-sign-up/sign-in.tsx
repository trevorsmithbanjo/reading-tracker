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
import Button from '@mui/material/Button';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

interface UserSignInState {
  email: string;
  password: string;
  showPassword?: boolean;
}

const SignIn: React.FC = () => {
  const [values, setValues] = useState<UserSignInState>({
    email: '',
    password: '',
    showPassword: false,
  });
  const { email, password } = values;

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

  const handleButtonDisabled = (): boolean => {
    if (email === undefined || password === undefined) {
      return true;
    }
    if (email.length === 0 || password.length === 0) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setValues({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
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
          onChange={handleChange('email')}
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
        <Button
          variant="contained"
          disableElevation
          sx={{ width: '60%', m: '0.5rem auto' }}
          disabled={handleButtonDisabled()}
          color="primary"
          onClick={(event) => handleSubmit(event)}
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={{ width: '60%', m: '0.5rem auto' }}
          color="success"
          onClick={signInWithGoogle}
        >
          Sign In With Google
        </Button>
      </Box>
    </Container>
  );
};

export default SignIn;
