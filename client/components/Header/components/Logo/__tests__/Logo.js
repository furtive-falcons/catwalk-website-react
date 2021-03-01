import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Logo from '..';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without problems', () => {
  const wrapper = shallow(<Logo />);
  const appComponent = wrapper.find("[data-test='component-logo']");
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});