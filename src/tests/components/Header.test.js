import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import {shallowToJson} from 'enzyme-to-json';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
