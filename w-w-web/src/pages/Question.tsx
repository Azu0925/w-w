import React from 'react'
import { useRecoilValue } from 'recoil'
import getQuestionState from '../selectors/getQuestionState'

let counter = 0
const Question = (): JSX.Element => {
  const question = useRecoilValue(getQuestionState)

  return (
    <main>
      <h3>第{counter++}問</h3>
      <p>{question.question}</p>
      <ul>
        {question.answerList.map((choice, index) => {
          <li key={index}>
            <button>{choice}</button>
          </li>
        })}
      </ul>
    </main>
  )
}

export default Question
