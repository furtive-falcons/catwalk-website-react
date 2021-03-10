import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Helpful from '..';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<Helpful />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('It shoulds do update Yes count when click', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-helpful');
  appComponent.simulate('click');
})
