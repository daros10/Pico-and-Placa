import React from 'react';
import '@testing-library/jest-dom';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { KeyboardTimePicker } from '@material-ui/pickers';
import { TimePicker, TimePickerProps } from './TimePicker';

configure({ adapter: new Adapter() });

describe('TimePicker component', () => {
  let wrapper: ShallowWrapper;
  let props: TimePickerProps;

  beforeEach(() => {
    props = {
      selectTime: new Date(),
      handleSelectTime: jest.fn(),
    };
    wrapper = shallow(<TimePicker {...props} />);
  });

  it('should redender component', () => {
    expect(wrapper.find(KeyboardTimePicker).length).toBe(1);
  });
});
