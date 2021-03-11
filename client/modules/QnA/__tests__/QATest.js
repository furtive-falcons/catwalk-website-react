import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import SearchBar from '../components/SearchBar.jsx';
import {QnA} from '../index.js';


Enzyme.configure({adapter: new EnzymeAdapter()});

test('Search Bar component exists', () => {
  const wrapper = shallow(<SearchBar/>);
  const appComponent = wrapper.find("[data-test='component-searchBar']");
  expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
})

// describe('<QnA />', () => {
//   it('It has a title', () => {
//     const wrapper = mount(<QnA/>);
//     const title = wrapper.find("[data-test='component-title']");
//     expect(title.text()).toBe('QUESTIONS & ANSWERS');
//   });

//   it('It has a searchbar', () => {
//     const wrapper = mount(<QnA />);
//     const searchBar = wrapper.find()
//   })
// })