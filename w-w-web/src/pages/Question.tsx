import React, { Suspense } from 'react'
import Header from '../components/headers/Header'
import QuestionForm from '../components/QuestionForm'
import './question.scss'

const Question = (): JSX.Element => {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<p>Loading...</p>}>
                    <QuestionForm />
                </Suspense>
            </main>
        </>
    )
}

export default Question
