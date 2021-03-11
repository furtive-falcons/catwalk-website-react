import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Breakdown from '../Breakdown.js';
import Filter from '../Filter.js';
import Score from '../Score.js';
import Bar from '../Bar.js';
import Mark from '../Mark.js';
import Recommend from '../Recommend.js';

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

test('Bars components exists', () => {
  const wrapper = shallow(<Bar />);
  const appComponent = wrapper.find('#bar');
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});

test('Recommend component exists', () => {
  const wrapper = shallow(<Recommend />);
  const appComponent = wrapper.find('#rec');
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});

test('Mark components exists', () => {
  const wrapper = shallow(<Mark />);
  const appComponent = wrapper.find('#mark');
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});
