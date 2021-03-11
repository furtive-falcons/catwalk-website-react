import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import LinkTag from '..';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<LinkTag />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders button without problems', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-link');
  expect(appComponent.length).toBe(1);
});

test('clicking on button works', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'component-link');
  button.simulate('click');
});