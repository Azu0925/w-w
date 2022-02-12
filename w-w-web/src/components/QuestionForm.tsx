import { makeStyles } from '@mui/styles'
import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import answerResultsState from '../atoms/answerResults'
import getQuestionState from '../selectors/getQuestionState'
import AnswerChoiceButton from './AnswerChoiceButton'

const useStyles = makeStyles({
  title: {
    marginBottom: '10px',
  },
})

const QuestionForm = (): JSX.Element | null => {
  const classes = useStyles()
  const setAnswerResults = useSetRecoilState(answerResultsState)
  const question = useRecoilValue(getQuestionState)
  setAnswerResults([question])
  if (!question) null

  return (
    <section>
      <h3 className={classes.title}>{question.question}</h3>
      <ul>
        {question.answerList.map((choice, index) => (
          <li key={index}>
            <AnswerChoiceButton name={choice} id={index} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default QuestionForm
