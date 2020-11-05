import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import logo from '../img/logo/fruits-log.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logoButton: {
    padding: '5px',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(2),
    border: '2px solid #fff',
  },
  cartButton: {
    padding: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();

  const cart = useSelector(({ cart }) => cart);

  return (
    <div id="header">
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.logoButton}
              color="inherit"
              aria-label="menu">
              <img style={{ height: '40px', width: '40px' }} src={logo} alt="fruits logo" />
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            Fruits Store
          </Typography>
          <Link to="/cart">
            <Button
              className={classes.cartButton}
              variant="contained"
              color="primary"
              style={{ padding: '10px 20px' }}>
              {cart.totalCount ? (
                <>
                  <span>${cart.totalPriceWithDiscount}</span>
                  <span style={{ margin: '0 10px' }}>|</span>
                  <ShoppingCartIcon />
                  <span style={{ marginLeft: '10px' }}>{cart.totalCount}</span>
                </>
              ) : (
                <>
                  <ShoppingCartIcon />
                  <span style={{ marginLeft: '10px' }}>Cart</span>
                </>
              )}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
