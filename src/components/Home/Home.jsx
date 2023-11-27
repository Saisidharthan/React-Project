import React from 'react';
import { Container, Typography } from '@mui/material';
import Products from '../Products/Products';

const Home = () => {
  return (
      <div style={{marginTop:"75px"}}>
        <Container>
            <Typography variant="h1" align="center" gutterBottom>
            The best gifts are made with Love
            </Typography>
            <Products/>
        </Container>
      </div>
  );
};

export default Home;
