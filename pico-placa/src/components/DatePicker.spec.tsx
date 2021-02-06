import React from 'react';
import '@testing-library/jest-dom';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { DatePicker, DatePickerProps } from './DatePicker';

configure({ adapter: new Adapter() });

describe('DatePicker component', () => {
  let wrapper: ShallowWrapper;
  let props: DatePickerProps;

  beforeEach(() => {
    props = {
      selectDate: new Date(),
      handleChangeDate: jest.fn(),
    };
    wrapper = shallow(<DatePicker {...props} />);
  });

  it('should redender component', () => {
    expect(wrapper.find(KeyboardDatePicker).length).toBe(1);
  });
});
