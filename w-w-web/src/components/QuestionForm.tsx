import React from 'react'
import { useRecoilValue } from 'recoil'
import getQuestionState from '../selectors/getQuestionState'

const QuestionForm = (): JSX.Element | null => {
  const question = useRecoilValue(getQuestionState)
  if (!question) {
    return null
  }

  return (
    <section>
      <h3>{question.question}</h3>
      <ul>
        {question.answerList.map((choice, index) => (
          <li key={index}>
            <button>{choice}</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default QuestionForm
