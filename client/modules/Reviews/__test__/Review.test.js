import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import ReviewsAndRatings from '../index.js';

// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

// Expect Reviews and Ratings main wrapper component exist
test('Reviews and Ratings main wrapper component exists', () => {
  const wrapper = shallow(<ReviewsAndRatings />);
  const appComponent = wrapper.find('#mainWrapper');
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});
