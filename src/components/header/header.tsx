import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { blueGrey } from '@mui/material/colors';

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
    <Link href="#" underline="hover" color={blueGrey[400]}>
      <HomeIcon fontSize="large" />
    </Link>
    <Link href="#" underline="hover">
      <Typography
        variant="body1"
        component="div"
        sx={{ textTransform: 'uppercase' }}
        color={blueGrey[900]}
      >
        Sign In
      </Typography>
    </Link>
  </div>
);

export default Header;
