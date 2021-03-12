import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import QAEntry from '../QAEntry.jsx';

Enzyme.configure({adapter: new EnzymeAdapter()});

describe('<QAEntry />', () => {
  let wrapper;
  const props = {
    question: {
      question_id: 1,
      question_body: 'question body',
      asker_name: 'patagucci',
      question_helpfulness: 1,
      reported: false,
    },
    searched: 'search',
    id: 1,
  }

  beforeEach(() => {
    wrapper = shallow(<QAEntry question={props.question} id={props.id} searched={props.searched} />);
  })

  it('It render without exploding', () => {
    const entry = wrapper.find('.container')
    expect(entry.length).toEqual(1);
  })

  it('It has a question', () => {
    const question = wrapper.find('#question');
    expect(question.props().body).toBe('question body')
  })

  it('It has a answer container', () => {
    const answerContainer = wrapper.find('#answer-container');
    expect(answerContainer.props().display).toStrictEqual([]);
  })

  it('It has question information', () => {
    const questionInfo = wrapper.find('#question-info');
    expect(questionInfo.props().question).toBe(props.question);
  })
})