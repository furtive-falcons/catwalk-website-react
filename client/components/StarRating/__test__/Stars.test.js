import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import FullStar from '../FullStar.js';
import PartialStar from '../PartialStar.js';

// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

// Render tests
// Expect Full and Partial stars to exist
test('Full star exists', () => {
  const wrapper = shallow(<FullStar />);
  const appComponent = wrapper.find('#fullstar');
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});

test('Partial star exists', () => {
  const wrapper = shallow(<PartialStar />);
  const appComponent = wrapper.find('#partialstar');
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});
