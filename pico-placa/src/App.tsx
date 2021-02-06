import React, { useState } from 'react';
import {
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Snackbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { Appbar } from './components/Appbar';
import { Form } from './components/Form';
import { picoPlacaPredictor } from './helpers/Predictor';
import { MessageEnum } from './constants/MessageEnum';

const useStyles = makeStyles({
  errorBackground: {
    background: '#d22c21',
  },
  sucessBackground: {
    background: '#2e7d32',
  },
});

function App() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [selectDate, setSelectDate] = useState<Date | null>(new Date());
  const [selectTime, setSelectTime] = useState<Date | null>(new Date());

  const handleOnClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <Appbar />
      <Grid
        container
        spacing={4}
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid item xs={12} md={12} lg={12}>
          <Form
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setIsOpen={setIsOpen}
            inputValue={inputValue}
            setInputValue={setInputValue}
            selectDate={selectDate}
            setSelectDate={setSelectDate}
            selectTime={selectTime}
            setSelectTime={setSelectTime}
          />
        </Grid>
        {isLoading && <CircularProgress />}
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          ContentProps={{
            'aria-describedby': 'message-id',
            className: picoPlacaPredictor(
              inputValue,
              selectDate,
              selectTime
            ).includes(MessageEnum.SUCCESS)
              ? classes.sucessBackground
              : classes.errorBackground,
          }}
          action={
            <>
              <IconButton
                size='small'
                aria-label='close'
                color='inherit'
                onClick={handleOnClose}
              >
                <CloseIcon fontSize='small' />
              </IconButton>
            </>
          }
          open={isOpen}
          onClose={handleOnClose}
          message={picoPlacaPredictor(inputValue, selectDate, selectTime)}
        />
      </Grid>
    </Container>
  );
}

export default App;
