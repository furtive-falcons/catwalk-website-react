import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import WithMargins from '..';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<WithMargins />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without problems', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-margins');
  expect(appComponent.length).toBe(1);
});
