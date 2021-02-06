import React from 'react';
import '@testing-library/jest-dom';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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
import { Form, FormProps } from './Form';

configure({ adapter: new Adapter() });

describe('Form component', () => {
  let wrapper: ShallowWrapper;
  let props: FormProps;

  beforeEach(() => {
    props = {
      isLoading: false,
      setIsLoading: jest.fn(),
      setIsOpen: jest.fn(),
      inputValue: 'ABC-1234',
      setInputValue: jest.fn(),
      selectDate: new Date(),
      setSelectDate: jest.fn(),
      selectTime: new Date(),
      setSelectTime: jest.fn(),
    };
    wrapper = shallow(<Form {...props} />);
  });

  it('should redender component', () => {
    expect(wrapper.find(Card).length).toBe(1);
    expect(wrapper.find(CardContent).length).toBe(1);
    expect(wrapper.find(Typography).length).toBe(1);
    expect(wrapper.find(TextField).length).toBe(1);
    expect(wrapper.find(Divider).length).toBe(1);
    expect(wrapper.find(Button).length).toBe(1);
    expect(wrapper.find(DatePicker).length).toBe(1);
    expect(wrapper.find(TimePicker).length).toBe(1);
  });
});
