import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Appbar } from './components/Appbar';
import { Form } from './components/Form';

function App() {
  return (
    <Container>
      <Appbar />
      <Grid
        container
        spacing={4}
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Grid item xs={6}>
          <Form />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
