import React, { useEffect } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = React.useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{marginTop:'75px'}}>
    <Container>
      <Grid container spacing={10}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography color="textSecondary">${product.price}</Typography>
              </CardContent>
              <CardContent>
                <Button
                variant="contained"
                color="primary"
                onClick={async (event) => {
                  try {
                    event.preventDefault();
                    const responseProducts = await axios.get('http://localhost:3001/products');
                    const newProducts = responseProducts.data;
                    const productToUpdate = newProducts.find((productp) => productp.id === product.id);

                    if (productToUpdate) {
                      const updatedQuantity = productToUpdate.quantity + 1;
                      
                      await axios.patch(`http://localhost:3001/products/${productToUpdate.id}`, { quantity: updatedQuantity });
                    }
                  } catch (error) {
                    console.error(error);
                    // Handle errors here
                  }
                }}
                fullWidth
              >
                Add To Cart
              </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
};

export default Products;
