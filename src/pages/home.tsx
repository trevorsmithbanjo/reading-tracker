import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Search from '../components/search/search';
import SignUp from '../components/sign-in-and-sign-up/sign-up';

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
`;

const Home: React.FC = () => (
  <Container>
    <StyledBox>
      <Typography variant="h2" component="h1">
        Reading Tracker
      </Typography>
    </StyledBox>
    <StyledBox>
      <Search
        label="Search"
        // sx={{ '&.MuiStack-root': { width: '40%' } }}
        width="40%"
      />
    </StyledBox>
    <StyledBox>
      <SignUp />
    </StyledBox>
  </Container>
);

export default Home;
