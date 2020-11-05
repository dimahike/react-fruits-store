import React from 'react';

// import './productitem.scss';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import discountImage from '../img/discount.png';
import { Box, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  discountImg: {
    height: '70px',
    position: 'absolute',
  },
});

export const ProductItem = ({
  id,
  price,
  title,
  imgUrl,
  onClickAddProduct,
  onClickSubtractProduct,
  addedTotal,
  discount,
}) => {
  const classes = useStyles();
  const { totalCount, totalPriceWithDiscount } = addedTotal;

  const onHandleAddProduct = () => {
    onClickAddProduct(id);
  };

  const onHandleSubtractProduct = () => {
    onClickSubtractProduct(id);
  };

  return (
    <div className="product">
      <Card className={classes.root}>
        <CardActionArea>
          {discount && <img className={classes.discountImg} src={discountImage} alt="discount" />}

          <CardMedia component="img" alt={title} height="300" image={imgUrl} title={title} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ textTransform: 'capitalize' }}>
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ justifyContent: 'space-between' }}>
          <Typography>Price for 1kg: $ {price} </Typography>
          {addedTotal ? (
            <Box display="flex" alignItems="center" justifyContent="center">
              <IconButton onClick={onHandleSubtractProduct}>
                <RemoveIcon color="error" />
              </IconButton>
              <Typography variant="body1">{totalCount}</Typography>
              <IconButton onClick={onHandleAddProduct}>
                <AddIcon color="error" />
              </IconButton>
              <Typography variant="body1">| $ {totalPriceWithDiscount}</Typography>
            </Box>
          ) : (
            <Button variant="contained" color="primary" size="small" onClick={onHandleAddProduct}>
              <ShoppingCartIcon />
              <span style={{ marginLeft: '10px' }}>Add To Cart</span>
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
};
