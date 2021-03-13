import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import MoreQuestion from '../components/MoreQuestion';
import {QnA} from '../index';
import AddQuestion from '../components/AddQuestion';

Enzyme.configure({adapter: new EnzymeAdapter()});


describe('<QnA />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<QnA />)
  })

  it('It render without exploding', () => {
    expect(wrapper.length).toEqual(1);
  })

  it('It has a title', () => {
    const title = wrapper.find("#title");
    expect(title.text()).toBe('QUESTIONS & ANSWERS');
  });

  it('It has a search bar', () => {
    const searchBar = wrapper.find('#search-bar');
    expect(searchBar.text()).toBe('<SearchBar />');
  })

  it('It has a entry container', () => {
    const entryContainer = wrapper.find('#entry-container');
    expect(entryContainer.text()).toBe('<EntryContainer />')
  })

  it('It has a add question button', () => {
    const addQuestion = wrapper.find('#add-question');
    expect(addQuestion.text()).toBe('<AddQuestion />');
  })
})

describe('<MoreQuestion />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MoreQuestion />);
  });

  it('When you click it load more questions', () => {
    const moreQuestion = wrapper.find('#more-question');
    moreQuestion.simulate('click');
  })
})

describe('<AddQuestion />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddQuestion />);
  });

  it('When you click question modal pop up', () => {
    const addQuestion = wrapper.find('#add-question');
    addQuestion.simulate('click');
  })
})