import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Buttons from '../Buttons.js';
import ReviewCount from '../ReviewCount.js';
import Tile from '../Tile.js';
import ReviewList from '../ReviewList.js';

// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

// Render tests
// Expect Review sub-components to exist
test('Review List component exists', () => {
  const wrapper = shallow(<ReviewList />);
  const appComponent = wrapper.find('#reviewList');
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});

test('Review Count component exists', () => {
  const wrapper = shallow(<ReviewCount />);
  const appComponent = wrapper.find('#reviewCount');
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});

test('"Add Review" and "More Reviews" buttons exists', () => {
  const wrapper = shallow(<Buttons />);
  const appComponent = wrapper.find('#buttons');
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});

test('Tiles exists', () => {
  const wrapper = shallow(<Tile />);
  const appComponent = wrapper.find('#tile');
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});

// Functionality test
// Add more button
// test('"Add More" button should add more comments to review list', ()=>{
//   const wrapper = shallow(<Buttons />);
//   const wrapper2 = mount(<ReviewList />);
//   const appComponent = wrapper.children()[0];
//   const appComponent2 = wrapper2.find('#reviewList');

//   // original length of data before click before click
//   const beforeClick = appComponent2.children().length;
//   // simulate a click
//   appComponent.simulate('click');
//   // after the click, data length should change
//   const afterClick = appComponent2.children().length;

//   console.log(beforeClick)
//   console.log(afterClick)

//   expect(beforeClick).not.toBe(afterClick);

// });

