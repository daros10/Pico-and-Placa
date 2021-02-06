import React, { FC } from 'react';
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';
import { DatePicker } from './DatePicker';
import { TimePicker } from './TimePicker';

export interface FormProps {
  isLoading: boolean;
  setIsLoading: any;
  setIsOpen: any;
  inputValue: string;
  setInputValue: any;
  selectDate: Date | null;
  setSelectDate: any;
  selectTime: Date | null;
  setSelectTime: any;
}

export const Form: FC<FormProps> = (props) => {
  const handleInpuntChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    const inputValue = event.target.value.toUpperCase();
    props.setInputValue(inputValue);
  };

  const handleDateChange = (date: Date | null): void => {
    props.setSelectDate(date);
  };

  const handleTimeChange = (time: Date | null): void => {
    props.setSelectTime(time);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.setIsLoading(true);
    setTimeout(() => {
      props.setIsLoading(false);
      props.setIsOpen(true);
    }, 1000);
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
              value={props.inputValue}
              onChange={handleInpuntChange}
              style={{ marginTop: 20 }}
              fullWidth
              required
            />
            <DatePicker
              selectDate={props.selectDate}
              handleChangeDate={handleDateChange}
            />
            <TimePicker
              selectTime={props.selectTime}
              handleSelectTime={handleTimeChange}
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              style={{ marginTop: 20 }}
              fullWidth
              disabled={props.isLoading}
            >
              Predict
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
