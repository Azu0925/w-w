import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useRecoilValue } from 'recoil'
import answerResultsState from '../atoms/answerResults'
import QuestionForm from './QuestionForm'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

const AnswerChoiceButton = (props: { name: string, key: number }): JSX.Element => {
  const {name, key} = props
  const classes = useStyles()
  const answerList = useRecoilValue(answerResultsState)

  return (
    <Button variant="outlined" className={classes.root}>
      {name}
    </Button>
  )
}

export default AnswerChoiceButton
