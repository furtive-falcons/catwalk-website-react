import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Search from '..';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without problems', () => {
  const wrapper = shallow(<Search />);
  const appComponent = wrapper.find("[data-test='component-search']");
  console.log(wrapper.debug());
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});