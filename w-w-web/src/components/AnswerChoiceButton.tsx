import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useRecoilValue, useRecoilRefresher_UNSTABLE, useSetRecoilState } from 'recoil'
import answerResultsState from '../atoms/answerResults'
import getQuestionState from '../selectors/getQuestionState'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

const AnswerChoiceButton = (props: { name: string; id: number }): JSX.Element => {
  const { name, id } = props
  const classes = useStyles()
  const { questionNumber } = useParams<{ questionNumber: string }>()
  const path = '/question/' + String(Number(questionNumber) + 1)
  const history = useHistory()
  const answerList = useRecoilValue(answerResultsState)
  const setAnswerResults = useSetRecoilState(answerResultsState)
  const refreshQuestion = useRecoilRefresher_UNSTABLE(getQuestionState)
  const handleChangeSelect = async () => {
    if (answerList[0].answerNumber === id) {
      console.log('正解')
    } else {
      console.log('不正解')
    }

    history.push(path)
    refreshQuestion()
  }

  return (
    <Button variant="outlined" className={classes.root} onClick={handleChangeSelect}>
      {name}
    </Button>
  )
}

export default AnswerChoiceButton
