import React from 'react';
import Enzyme,{ shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import CardList from '../CardList.js'

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders CardList without problems', () => {
  const cardObjArr = [{
    category: "Jackets",
    features: [],
    id: 14034,
    name: "Camo Onesie",
    original_price: "140.00",
    ratingAverage: 3.6458333333333335,
    sale_price: null
  }]
    const wrapper = shallow(<CardList cardList={cardObjArr} />);
    expect(wrapper).toBeTruthy();
});

// test('renders CardList children without problems', () => {
//   const cardObjArr = [{
//     category: "Jackets",
//     features: [],
//     id: 14034,
//     name: "Camo Onesie",
//     original_price: "140.00",
//     ratingAverage: 3.6458333333333335,
//     sale_price: null
//   }]
//     const wrapper = mount(<CardList cardList={cardObjArr} />);
//     expect(wrapper).toBeTruthy();

//     expect(wrapper.find(`data-test="component-cardlist"`).prop('cardObjArr')).length).toBe(1);
// });

// const setup = () => shallow(<button />);
// const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

// test('renders button without problems', () => {
//   const wrapper = setup();
//   const appComponent = findByTestAttr(wrapper, 'component-button');
//   expect(appComponent.length).toBe(1);
// });

// test('clicking on button works', () => {
//   const wrapper = setup();
//   const button = findByTestAttr(wrapper, 'component-button');
//   button.simulate('click');
// });

// test('renders ButtonContainer without problems', () => {
//   const wrapper = shallow(<CardList />);
//   const appComponent = wrapper.find('.right-prev-button');
//   expect(wrapper).toBeTruthy();
//   expect(appComponent.length).toBe(1);
// });

// test('renders cardlist container without problems', () => {
//   const cardObjArr = {
//     category: "Jackets",
//     features: [],
//     id: 14034,
//     name: "Camo Onesie",
//     original_price: "140.00",
//     ratingAverage: 3.6458333333333335,
//     sale_price: null
//   }
//   let wrapper;
//   beforeEach(() => { wrapper = shallow(<CardListContainer />)})
//   const wrapper = shallow(<CardList />);
//   const appComponent = wrapper.find("[data-test='component-cardlist-div']");
//   expect(wrapper).toBeTruthy();
//   expect(appComponent.length).toBe(1);
// });