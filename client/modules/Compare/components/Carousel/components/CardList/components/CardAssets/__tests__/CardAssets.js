import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import CardAssets from '../CardAssets.js'

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders CardAssets without problems', () => {
    const wrapper = shallow(<CardAssets />);
    const appComponent = wrapper.find("[data-test='component-assets']");
    expect(wrapper).toBeTruthy();
    expect(appComponent.length).toBe(1);
});


