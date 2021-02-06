import React, { Fragment } from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core';

export const Appbar = () => {
  return (
    <Fragment>
      <AppBar style={{ fontWeight: 'bold' }}>
        <Toolbar>
          <Typography variant='h6'>Pico & Placa</Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};
