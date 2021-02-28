import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import SearchBar from '../components/SearchBar.jsx';


Enzyme.configure({adapter: new EnzymeAdapter()});

test('Search Bar component exists', () => {
  const wrapper = shallow(<SearchBar/>);
  const appComponent = wrapper.find()
})