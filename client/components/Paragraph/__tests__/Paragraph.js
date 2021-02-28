import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Paragraph from '..';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without problems', () => {
  const wrapper = shallow(<Paragraph />);
  const appComponent = wrapper.find("#Paragraph");
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});