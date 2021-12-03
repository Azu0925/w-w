import { makeStyles } from '@mui/styles'
import React from 'react'
import { useRecoilValue } from 'recoil'
import getQuestionState from '../selectors/getQuestionState'
import AnswerChoiceButton from './AnswerChoiceButton'

const useStyles = makeStyles({
  title: {
    marginBottom: '10px',
  },
})

const QuestionForm = (): JSX.Element | null => {
  const classes = useStyles()
  const question = useRecoilValue(getQuestionState)
  if (!question) {
    return null
  }

  return (
    <section>
      <h3 className={classes.title}>{question.question}</h3>
      <ul>
        {question.answerList.map((choice, index) => (
          <li key={index}>
            <AnswerChoiceButton name={choice} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default QuestionForm
