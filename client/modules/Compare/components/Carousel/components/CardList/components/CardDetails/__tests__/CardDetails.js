import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import CardDetails from '../CardDetails.js'

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders CardDetails without problems', () => {
    const wrapper = shallow(<CardDetails />);
    const appComponent = wrapper.find("[data-test='component-details']");
    expect(wrapper).toBeTruthy();
    expect(appComponent.length).toBe(1);
});


