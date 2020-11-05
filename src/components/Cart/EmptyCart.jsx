import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

export const EmptyCart = () => {
  return (
    <Box p={[0, 4, 8, 12]} textAlign="center">
      <Typography variant="h3">YOUR CART IS CURENTLY EMPTY</Typography>

      <Box mt={[8, 6, 4]}>
        <Link className="btn-link" to="/">
          <Button variant="contained" color="primary">
            back to products
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
