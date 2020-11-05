import React from 'react';
import { Box, Grid, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import discountImage from '../../img/discount.png';

const useStyles = makeStyles((theme) => ({
  image: {
    height: '100px',
    justifyContent: 'center',
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      height: '500px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '300px',
    },
  },
  mediaDisplay: {
    display: 'flex',
    justifyContent: 'center',
  },
  discountImg: {
    height: '35px',
    position: 'absolute',
  },
}));

export const Bodycart = ({
  product,
  onClickAddProduct,
  onClickSubtractProduct,
  onClickDeleteProduct,
}) => {
  const classes = useStyles();
  const discount = product.item.discount;

  return (
    <Box
      mb={[8, 1, 1, 1]}
      mt={[8, 1, 1, 1]}
      pb={[3, 1, 1, 1]}
      style={{ textTransform: 'capitalize' }}
      borderBottom={1}
      borderColor="grey.900"
      align="center">
      <Grid container key={`product_from_cart_${product.item.id}`} alignItems="center">
        <Grid item xs={12} sm={12} md={2} className={classes.image}>
          <Box xs={{ height: '100px' }}>
            {discount && <img className={classes.discountImg} src={discountImage} alt="discount" />}
            <img src={product.item.imgUrl} alt={product.item.title} style={{ maxHeight: '100%' }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <Box fontSize={[50, 50, 20, 20]} pb={[4, 4, 0]}>
            {product.item.title}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <Typography variant="body1" className={classes.mediaDisplay}>
            <Box component="span" display={{ sm: 'block', md: 'none' }}>
              Price:
            </Box>
            <span>$ {product.item.price}</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <IconButton onClick={onClickSubtractProduct(product.item.id)}>
              <RemoveIcon color="error" />
            </IconButton>
            <Typography variant="body1">{product.totalCount}</Typography>
            <IconButton onClick={onClickAddProduct(product.item.id)}>
              <AddIcon color="error" />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <IconButton onClick={onClickDeleteProduct(product.item.id)}>
            <DeleteIcon color="error" />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={12} md={2} className="product-total-price font-w-600">
          <Typography variant="body1" className={classes.mediaDisplay}>
            <Box component="span" display={{ sm: 'block', md: 'none' }}>
              Total Price:
            </Box>
            <span>$ {product.totalPrice}</span>
          </Typography>
          {product.item.discount && (
            <Typography variant="body1" color="secondary">
              DISCOUNTED $ {product.totalPriceWithDiscount}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
