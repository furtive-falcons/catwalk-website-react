import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Section from '../Section.js'

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders section without problems', () => {
    const wrapper = shallow(<Section />);
    const appComponent = wrapper.find("[data-test='component-section']");
    expect(wrapper).toBeTruthy();
    expect(appComponent.length).toBe(1);
});


