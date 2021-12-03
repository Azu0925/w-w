import { makeStyles } from '@mui/styles'
import React, { Suspense } from 'react'
import QuestionForm from '../components/QuestionForm'

const useStyles = makeStyles({
  root: {
    maxWidth: '900px',
    margin: '10px auto',
    textAlign: 'center',
  },
})

const Question = (): JSX.Element => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Suspense fallback={<p>Loading...</p>}>
        <QuestionForm />
      </Suspense>
    </main>
  )
}

export default Question
