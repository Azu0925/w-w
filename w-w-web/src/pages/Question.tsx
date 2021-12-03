import React, { Suspense } from 'react'
import QuestionForm from '../components/QuestionForm'

const Question = (): JSX.Element => {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <QuestionForm />
      </Suspense>
    </main>
  )
}

export default Question
