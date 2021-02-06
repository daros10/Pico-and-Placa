import React from 'react';
import '@testing-library/jest-dom';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Appbar } from './Appbar';

configure({ adapter: new Adapter() });

describe('Appbar component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Appbar />);
  });

  it('should render component', () => {
    expect(wrapper.find(AppBar).length).toEqual(1);
    expect(wrapper.find(Toolbar).length).toEqual(1);
    expect(wrapper.find(Typography).length).toEqual(1);
  });
});
