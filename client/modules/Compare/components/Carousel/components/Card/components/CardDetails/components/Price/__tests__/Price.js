import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Price from '../Price.js';

Enzyme.configure({ adapter: new EnzymeAdapter() });


test('It render price', () => {
  const wrapper = shallow(<Price />);
  const appComponent = wrapper.find("[data-test='component-price']");
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});