import React from 'react';

import { Box, Button } from '@material-ui/core';

import {
  addProductToCart,
  clearCart,
  deleteProductToCart,
  subtractProductToCart,
} from '../../redux/actions/cart';
import { useDispatch } from 'react-redux';
import { HeaderCart } from './HeaderCart';
import { Bodycart } from './Bodycart';

export const CartWithProducts = ({ cartProducts }) => {
  const dispatch = useDispatch();

  const onClickAddProduct = (id) => () => {
    // console.log('onClickAddProduct', id);
    dispatch(addProductToCart(id));
  };

  const onClickSubtractProduct = (id) => () => {
    // console.log('onClickSubtractProduct');
    dispatch(subtractProductToCart(id));
  };

  const onClickDeleteProduct = (id) => () => {
    // console.log('onClickDeleteProduct');
    dispatch(deleteProductToCart(id));
  };

  const onClickClearCart = () => {
    // console.log('onClickClearCart');
    dispatch(clearCart());
  };

  const onClickOrder = () => {
    console.log('onClickOrder');
    alert('you ordered fruits');
    dispatch(clearCart());
  };

  return (
    <div className="main">
      <div className="left">
        <div className="paper">
          <div className="header">
            <h1>
              <i className="fas fa-shopping-cart"></i> Your Cart
            </h1>
          </div>
          <div>
            <HeaderCart />
            {Object.values(cartProducts.items).map((product) => (
              <Bodycart
                key={`${product.item.title}_${product.item.id}`}
                product={product}
                onClickAddProduct={onClickAddProduct}
                onClickSubtractProduct={onClickSubtractProduct}
                onClickDeleteProduct={onClickDeleteProduct}
              />
            ))}
          </div>

          <Box display="flex" justifyContent="flex-end" mt={4}>
            <Button variant="outlined" color="secondary" onClick={onClickClearCart}>
              clear cart
            </Button>
            <Button
              onClick={onClickOrder}
              variant="contained"
              color="primary"
              style={{ marginLeft: '15px' }}>
              Order
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};
