import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Form from '../Form.js';
import Input from '../Input.js';
import RadioArray from '../RadioArray.js';
import SelectStars from '../SelectStars.js';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Test all form components', () => {
  test('Form component should exist', () => {
    const component = shallow(<Form />);
    expect(component).toBeTruthy();
    expect(component.length).toBe(1);
  });

  test('Input component should exist', () => {
    const component = shallow(<Input />);
    expect(component).toBeTruthy();
    expect(component.length).toBe(1);
  });

  test('Radio array component should exist', () => {
    const component = shallow(<RadioArray />);
    expect(component).toBeTruthy();
    expect(component.length).toBe(1);
  });

  test('Select stars component should exist', () => {
    const component = shallow(<SelectStars />);
    expect(component).toBeTruthy();
    expect(component.length).toBe(1);
  });
});
