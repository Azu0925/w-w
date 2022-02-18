import React from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import answerResultsState from '../atoms/answerResults'
import getQuestionState from '../selectors/getQuestionState'
import AnswerChoiceButton from './AnswerChoiceButton'
import AnswerResult from './AnswerResult'
import './questionForm.scss'

const QuestionForm = (): JSX.Element | null => {
    const setAnswerResults = useSetRecoilState(answerResultsState)
    const question = useRecoilValue(getQuestionState)
    const { questionNumber } = useParams<{ questionNumber: string }>()
    setAnswerResults([question])
    if (!question) null

    return (
        <section>
            <div id="question">
                <p>第{questionNumber}問</p>
                <h3 id="question-text">{question.question}</h3>
                <AnswerResult />
            </div>
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
