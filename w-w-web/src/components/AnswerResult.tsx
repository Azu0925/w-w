import React from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilRefresher_UNSTABLE, useRecoilState } from 'recoil'
import isAnsweredState from '../atoms/isAnswered'
import resultEffectState from '../atoms/resultEffect'
import getQuestionState from '../selectors/getQuestionState'
import './answerResult.scss'

const AnswerResult = (): JSX.Element => {
    const [result, setResult] = useRecoilState(resultEffectState)
    const { questionNumber } = useParams<{ questionNumber: string }>()
    const githubPath = process.env.NODE_ENV === 'production' ? '/w-w' : ''
    const path = `${githubPath}/question/${String(Number(questionNumber) + 1)}`
    const refreshQuestion = useRecoilRefresher_UNSTABLE(getQuestionState)
    const refreshIsAnswered = useRecoilRefresher_UNSTABLE(isAnsweredState)
    const handleQuestionReset = () => {
        setResult(null)
        refreshQuestion()
        refreshIsAnswered()
    }
    if (result) {
        return (
            <section id="result">
                <h3 id="result-text-true" className="fade-in">
                    正解！！
                </h3>
                <p className="fade-in-late">
                    <a href={path} onClick={handleQuestionReset}>
                        次の問題へ進む→
                    </a>
                </p>
            </section>
        )
    } else if (result === null) {
        return <></>
    } else {
        return (
            <section id="result">
                <h3 id="result-text-false" className="fade-in">
                    不正解！！
                </h3>
                <p className="fade-in-late">
                    <a href={path} onClick={handleQuestionReset}>
                        次の問題へ進む→
                    </a>
                </p>
            </section>
        )
    }
}

export default AnswerResult
