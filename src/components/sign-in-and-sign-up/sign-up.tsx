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

import {
  auth,
  createUserProfileDocument,
} from '../../firebase/firebase.utils.js';

interface UserSignUpState {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
  showPassword?: boolean;
}

const SignUp: React.FC = () => {
  const [values, setValues] = useState<UserSignUpState>({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
  });
  const { displayName, email, password, confirmPassword } = values;

  const handleChange =
    (prop: keyof UserSignUpState) =>
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
    if (
      displayName === undefined ||
      email === undefined ||
      password === undefined ||
      confirmPassword === undefined
    ) {
      return true;
    }
    if (
      displayName.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );

      await createUserProfileDocument(user, { displayName });
      setValues({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
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
          Sign Up
        </Typography>
        <TextField
          label="Display Name"
          id="display-name"
          sx={{ m: 1 }}
          inputProps={{ type: 'text' }}
          value={values.displayName}
          onChange={handleChange('displayName')}
        />
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
        <FormControl variant="outlined" sx={{ m: 1 }}>
          <InputLabel htmlFor="confirm-password-label">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="confirmed-password-adornment"
            type={values.showPassword ? 'text' : 'password'}
            value={values.confirmPassword}
            onChange={handleChange('confirmPassword')}
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
            label="Confirm-Password"
          />
        </FormControl>
        <Button
          variant="contained"
          disableElevation
          sx={{ width: '60%', m: '0 auto' }}
          color="primary"
          disabled={handleButtonDisabled()}
          onClick={(event) => handleSubmit(event)}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default SignUp;
