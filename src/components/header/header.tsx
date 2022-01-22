/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
// import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { blueGrey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const CustomLink = styled(Link)`
  color: ${blueGrey[900]};
  margin: 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header: React.FC = () => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '2rem',
    }}
  >
    <CustomLink to="/">
      <HomeIcon fontSize="large" />
    </CustomLink>
    <CustomLink to="/sign-in">
      <Typography
        variant="body1"
        component="div"
        sx={{ textTransform: 'uppercase', fontWeight: '500' }}
        color={blueGrey[900]}
      >
        Sign In
      </Typography>
    </CustomLink>
  </div>
);

export default Header;
