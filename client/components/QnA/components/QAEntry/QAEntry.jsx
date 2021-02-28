import React from 'react';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import NameDate from './NameDate.jsx';
import Helpful from './Helpful.jsx';
import Report from './Report.jsx';
import LoadMoreAnswers from './LoadMoreAnswers.jsx';
import ImageThumbnail from './ImageThumbnail.jsx';
import AddAnswer from './AddAnswer.jsx';

const QAEntry = () => {
  return (
    <React.Fragment>
      <Question />
      <Answer />
      <ImageThumbnail />
      <NameDate />
      <Helpful />
      <Report />
      <AddAnswer />
      <LoadMoreAnswers />
    </React.Fragment>
  )
}

export default QAEntry;