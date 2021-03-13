import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Carousel from '../Carousel.js'

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders CardListContainer without problems', () => {
    const wrapper = shallow(<Carousel />);
    const appComponent = wrapper.find("[data-test='component-carousel']");
    expect(wrapper).toBeTruthy();
    expect(appComponent.length).toBe(1);
});


