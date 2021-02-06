import React, { FC } from 'react';
import { KeyboardTimePicker } from '@material-ui/pickers';

export interface TimePickerProps {
  selectTime: Date | null;
  handleSelectTime: any;
}

export const TimePicker: FC<TimePickerProps> = (props) => {
  return (
    <>
      <KeyboardTimePicker
        margin='normal'
        id='time-picker'
        label='Enter time to predict'
        value={props.selectTime}
        onChange={props.handleSelectTime}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
        fullWidth
      />
    </>
  );
};
