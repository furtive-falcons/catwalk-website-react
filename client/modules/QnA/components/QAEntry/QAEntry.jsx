import React from 'react';
import Question from './Question.jsx';
import NameDate from './NameDate.jsx';
import Helpful from './Helpful.jsx';
import Report from './Report.jsx';
import Answer from './Answer.jsx';
import LoadMoreAnswers from './LoadMoreAnswers.jsx';
import AddAnswer from './AddAnswer.jsx';
import {Entry} from './styles.js';
import Paragraph from '../../../../components/Paragraph/index.js';



const QAEntry = () => {
  return (
    <Entry className='container'>
      <Question />
      <Answer paragraph='Answer'/>
      <NameDate />
      <div className='helpful-1'><Helpful /></div>
      <div className='helpful-2'><Helpful /></div>
      <Report />
      <AddAnswer />
      <LoadMoreAnswers />
    </Entry>
  )
}

export default QAEntry;