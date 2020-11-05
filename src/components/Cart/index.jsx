import React from 'react';
import { Box, Paper } from '@material-ui/core';

import { EmptyCart } from './EmptyCart';
import { CartWithProducts } from './CartWithProducts';
import { useSelector } from 'react-redux';

export const Cart = () => {
  const cartProducts = useSelector(({ cart }) => cart);
  return (
    <div id="cart">
      <Box m={[0, 4, 8, 12]}>
        <Paper>
          <Box p={[4, 4, 4, 4]}>
            {Object.values(cartProducts.items)[0] ? (
              <CartWithProducts cartProducts={cartProducts} />
            ) : (
              <EmptyCart />
            )}
          </Box>
        </Paper>
      </Box>
    </div>
  );
};
