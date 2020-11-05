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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export const ProductItem = ({ id, price, title, imgUrl, onClickAddProduct, addedTotal }) => {
  const classes = useStyles();
  // const { totalCount, totalPrice } = addedTotal;

  const onHandleAddProduct = () => {
    onClickAddProduct(id);
  };

  return (
    <div className="product">
      <Card className={classes.root}>
        <CardActionArea>
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
          <Button variant="contained" color="primary" size="small" onClick={onHandleAddProduct}>
            <ShoppingCartIcon style={{ marginRight: '10px' }} />
            <Typography variant="body1">add to cart</Typography>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
