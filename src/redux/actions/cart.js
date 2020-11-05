export const addProductToCart = (id) => ({
  type: 'ADD_PRODUCT_CART',
  payload: id,
});

export const subtractProductToCart = (id) => ({
  type: 'SUBTRACT_PRODUCT_CART',
  payload: id,
});

export const deleteProductToCart = (id) => ({
  type: 'DELETE_PRODUCT_CART',
  payload: id,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});
