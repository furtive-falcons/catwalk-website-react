import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import DetailPage from '..';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<DetailPage />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without problems', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-detail');
  expect(appComponent.length).toBe(1);
});


