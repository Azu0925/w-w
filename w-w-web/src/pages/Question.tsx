import React, { Suspense } from 'react'
import Header from '../components/headers/Header'
import Loading from '../components/Loading'
import QuestionForm from '../components/QuestionForm'
import './question.scss'

const Question = (): JSX.Element => {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<Loading />}>
                    <QuestionForm />
                </Suspense>
            </main>
        </>
    )
}

export default Question
