import React, { Suspense } from 'react'
import Loading from '../components/Loading'
import QuestionForm from '../components/QuestionForm'
import './question.scss'

const Question = (): JSX.Element => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <QuestionForm />
            </Suspense>
        </>
    )
}

export default Question
