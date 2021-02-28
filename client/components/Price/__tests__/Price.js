import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Price from '..';

Enzyme.configure({ adapter: new EnzymeAdapter() });


test('It render price', () => {
  const wrapper = shallow(<Price />);
  const appComponent = wrapper.find('component-price');
  expect(wrapper).toBeTruthy()
  expect(appComponent.length).toBe(1);
});