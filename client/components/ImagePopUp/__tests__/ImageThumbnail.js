import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import ImageThumbnail from '..';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<ImageThumbnail />', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ImageThumbnail />);
  });


})