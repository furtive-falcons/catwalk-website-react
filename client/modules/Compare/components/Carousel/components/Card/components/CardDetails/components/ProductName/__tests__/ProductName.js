import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import ProductName from '../ProductName.js';

Enzyme.configure({ adapter: new EnzymeAdapter() });


test('It render price', () => {
  const wrapper = shallow(<ProductName />);
  const appComponent = wrapper.find("[data-test='component-name']");
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});