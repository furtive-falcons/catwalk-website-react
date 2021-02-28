import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import ProductCategory from '../index.js';

Enzyme.configure({ adapter: new EnzymeAdapter() });


test('It render price', () => {
  const wrapper = shallow(<ProductCategory />);
  const appComponent = wrapper.find("[data-test='component-category']");
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});