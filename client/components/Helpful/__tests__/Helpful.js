import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Helpful from '..';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<Helpful />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

describe('<Helpful />', () => {
  it('simulate click event', () => {
    const wrapper = shallow(<Helpful />)
    wrapper.find("[data-test='component-helpful']").simulate('click');
  })
});
