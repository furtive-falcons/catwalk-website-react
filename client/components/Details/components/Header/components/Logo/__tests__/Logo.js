import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Logo from '../../Logo';

// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without problems', () => {
  const wrapper = shallow(<Logo />);
  const appComponent = wrapper.find("[data-test='component-logo']");
  console.log(wrapper.debug());
  expect(wrapper).toBeTruthy();
  //   expect(appComponent.length).toBe(0);
  expect(appComponent.length).toBe(1);
//   expect(wrapper).toBeFalsy();
  // test behavior not implementation - most of the time
});