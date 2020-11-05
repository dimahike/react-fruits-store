import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

export const HeaderCart = () => {
  return (
    <Box
      display={{ xs: 'none', sm: 'none', md: 'block' }}
      mb={3}
      pb={2}
      borderBottom={1}
      borderColor="grey.500">
      <Grid container>
        <Grid item xs={2} className="table-header">
          <Typography variant="h6" align="center">
            PRODUCTS
          </Typography>
        </Grid>
        <Grid item xs={2} className="table-header">
          <Typography variant="h6" align="center">
            NAME OF PRODUCT
          </Typography>
        </Grid>
        <Grid item xs={2} className="table-header">
          <Typography variant="h6" align="center">
            PRICE
          </Typography>
        </Grid>
        <Grid item xs={2} className="table-header">
          <Typography variant="h6" align="center">
            QUANTITY
          </Typography>
        </Grid>
        <Grid item xs={2} className="table-header">
          <Typography variant="h6" align="center">
            REMOVE
          </Typography>
        </Grid>
        <Grid item xs={2} className="table-header">
          <Typography variant="h6" align="center">
            TOTAL PRICE
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
