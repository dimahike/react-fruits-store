import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ProductItem } from './ProductItem';
import { setProducts } from '../redux/actions/products';
import { addProductToCart, subtractProductToCart } from '../redux/actions/cart';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '30px 0',
  },
});

export const ProductList = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ products }) => products);
  const cartItems = useSelector(({ cart }) => cart.items);

  React.useEffect(() => {
    dispatch(setProducts());
  }, []);

  const onAddProductToCart = (id) => {
    dispatch(addProductToCart(id));
  };

  const onSubstractProductToCart = (id) => {
    dispatch(subtractProductToCart(id));
  };

  return (
    <div id="product-list">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={1} />
          <Grid container item xs={10} spacing={2}>
            {isLoaded &&
              items.map((obj) => (
                <Grid
                  key={`${obj.title}__${obj.id}`}
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  style={{ display: 'flex', justifyContent: 'center' }}>
                  <ProductItem
                    {...obj}
                    addedTotal={cartItems[obj.id] ? cartItems[obj.id] : ''}
                    onClickAddProduct={onAddProductToCart}
                    onClickSubtractProduct={onSubstractProductToCart}
                  />
                </Grid>
              ))}
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </div>
    </div>
  );
};
