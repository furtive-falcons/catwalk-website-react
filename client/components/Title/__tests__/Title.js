import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Title from '..';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<Title/>);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without problems', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-title');
  expect(appComponent.length).toBe(1);
});
