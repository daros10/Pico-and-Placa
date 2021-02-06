import React, { useState } from 'react';
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

export const Form = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectDate, setSelectDate] = useState<Date | null>(new Date());
  const [selectTime, setSelectTime] = useState<Date | null>(new Date());

  const handleInpuntChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const inputValue = event.target.value.toUpperCase();
    setInputValue(inputValue);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectDate(date);
  };

  const handleTimeChange = (time: Date | null) => {
    setSelectTime(time);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`${inputValue} - ${selectDate} - ${selectTime}`);
  };

  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <CardContent>
          <Typography
            variant='h6'
            style={{ fontWeight: 'bold', textAlign: 'center' }}
          >
            Pico & Placa
          </Typography>
          <Divider />
          <form onSubmit={handleSubmit}>
            <TextField
              id='license-plate'
              label='License Plate'
              inputProps={{
                maxLength: 8,
              }}
              placeholder='Enter your license plate'
              variant='outlined'
              value={inputValue}
              onChange={handleInpuntChange}
              style={{ marginTop: 20 }}
              fullWidth
              required
            />
            <KeyboardDatePicker
              margin='normal'
              id='date-picker-dialog'
              label='Enter date to predict'
              format='MM/dd/yyyy'
              value={selectDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              fullWidth
            />
            <KeyboardTimePicker
              margin='normal'
              id='time-picker'
              label='Enter time to predict'
              value={selectTime}
              onChange={handleTimeChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
              fullWidth
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              style={{ marginTop: 20 }}
              fullWidth
            >
              Predict
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
