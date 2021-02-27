import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Details from '..'

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without problems', () => {
    const wrapper = shallow(<Details />);
    const appComponent = wrapper.find("[data-test='component-details']");
    expect(wrapper).toBeTruthy();
    expect(appComponent.length).toBe(1);
});


