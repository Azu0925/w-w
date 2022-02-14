import React, { Suspense } from 'react'
import AnswerResult from '../components/AnswerResult'
import QuestionForm from '../components/QuestionForm'

const Question = (): JSX.Element => {
    return (
        <main>
            <Suspense fallback={<p>Loading...</p>}>
                <QuestionForm />
            </Suspense>
            <AnswerResult />
        </main>
    )
}

export default Question
