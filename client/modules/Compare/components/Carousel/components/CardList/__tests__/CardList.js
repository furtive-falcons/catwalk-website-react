import React from 'react';
import Enzyme,{ shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import CardList from '../CardList.js'

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders CardList without problems', () => {
  const cards = [{
    category: "Jackets",
    features: [],
    id: 14034,
    name: "Camo Onesie",
    original_price: "140.00",
    ratingAverage: 3.6458333333333335,
    sale_price: null
  }]
    const wrapper = mount(<CardList cardList={cards} />);
    const appComponent = wrapper.find("[data-test='component-cardlist']");
    expect(wrapper).toBeTruthy();
    expect(wrapper.length).toEqual(1);
});