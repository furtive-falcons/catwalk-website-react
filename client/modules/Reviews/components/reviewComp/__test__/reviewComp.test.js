import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Buttons from '../Buttons.js';
import ReviewCount from '../ReviewCount.js';
import Tile from '../Tile.js';
import ReviewList from '../ReviewList.js';
import Helpful from '../Helpful.js';
import Sort from '../Sort.js';

// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

// Render tests
// Expect Review sub-components to exist
describe('Review components testing', () => {
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

  test('Helpful exists', () => {
    const wrapper = shallow(<Helpful />);
    const appComponent = wrapper.find('#helpful');
    expect(wrapper).toBeTruthy();
    expect(appComponent.length).toBe(1);
  });

  test('Sort exists', () => {
    const wrapper = shallow(<Sort />);
    const appComponent = wrapper.find('#dropdown');
    expect(wrapper).toBeTruthy();
    expect(appComponent.length).toBe(1);
  });

});
