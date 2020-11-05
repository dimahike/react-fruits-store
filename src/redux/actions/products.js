import { storeProducts } from '../../data';

export const setProducts = () => ({
  type: 'SET_PRODUCTS',
  payload: storeProducts,
});
