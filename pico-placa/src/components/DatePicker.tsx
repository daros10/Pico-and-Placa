import React, { FC } from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';

export interface DatePickerProps {
  selectDate: Date | null;
  handleChangeDate: any;
}

export const DatePicker: FC<DatePickerProps> = (props) => {
  return (
    <>
      <KeyboardDatePicker
        margin='normal'
        id='date-picker-dialog'
        label='Enter date to predict'
        format='MM/dd/yyyy'
        value={props.selectDate}
        onChange={props.handleChangeDate}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        fullWidth
      />
    </>
  );
};
