import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import answerResultsState from '../atoms/answerResults'
import getQuestionState from '../selectors/getQuestionState'
import AnswerChoiceButton from './AnswerChoiceButton'

const QuestionForm = (): JSX.Element | null => {
    const setAnswerResults = useSetRecoilState(answerResultsState)
    const question = useRecoilValue(getQuestionState)
    setAnswerResults([question])
    if (!question) null

    return (
        <section>
            <h3>{question.question}</h3>
            <ul>
                {question.answerList.map((choice, index) => (
                    <li key={index}>
                        <AnswerChoiceButton name={choice} id={index} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default QuestionForm
