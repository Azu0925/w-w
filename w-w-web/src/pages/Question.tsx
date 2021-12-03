import React, { Suspense } from 'react'
import { useRecoilValue } from 'recoil'
import getQuestionState from '../selectors/getQuestionState'

let counter = 0
const Question = (): JSX.Element => {
  const question = useRecoilValue(getQuestionState)
  if(!question) null

  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <h3>第{counter++}問</h3>
        <p>{question.question}</p>
        <ul>
          {question.answerList.map((choice, index) => (
            <li key={index}>
              <button>{choice}</button>
            </li>
          ))}
        </ul>
      </Suspense>
    </main>
  )
}

export default Question
