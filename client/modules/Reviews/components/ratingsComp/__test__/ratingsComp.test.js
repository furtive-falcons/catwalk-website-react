import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Breakdown from '../Breakdown.js';
import Filter from '../Filter.js';
import Score from '../Score.js';

// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

// Render tests
// Expect Ratings sub-components to exist
test('Breakdown component exists', () => {
  const wrapper = shallow(<Breakdown />);
  const appComponent = wrapper.find('#breakdown');
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});

test('Filter component exists', () => {
  const wrapper = shallow(<Filter />);
  const appComponent = wrapper.find('#filter');
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});

test('Score component exists', () => {
  const wrapper = shallow(<Score />);
  const appComponent = wrapper.find('#score');
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});
