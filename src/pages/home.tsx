import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Search from '../components/search/search';
import Header from '../components/header/header';

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
`;

const Home: React.FC = () => (
  <Container>
    <Header />
    <StyledBox>
      <Typography variant="h2" component="h1">
        Reading Tracker
      </Typography>
    </StyledBox>
    <StyledBox>
      <Search label="Search" />
    </StyledBox>
  </Container>
);

export default Home;
