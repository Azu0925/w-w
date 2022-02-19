import React, { Suspense } from 'react'
import Header from '../components/headers/Header'
import MenuList from '../components/headers/MenuList'
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
