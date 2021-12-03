import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})
const AnswerChoiceButton = (props: { name: string }): JSX.Element => {
  const classes = useStyles()

  return (
    <Button variant="outlined" className={classes.root}>
      {props.name}
    </Button>
  )
}

export default AnswerChoiceButton
