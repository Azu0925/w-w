import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useRecoilRefresher_UNSTABLE, useRecoilState, useSetRecoilState } from 'recoil'
import isAnsweredState from '../atoms/isAnswered'
import resultEffectState from '../atoms/resultEffect'
import getQuestionState from '../selectors/getQuestionState'
import './answerResult.scss'

const AnswerResult = (): JSX.Element => {
    const [result, setResult] = useRecoilState(resultEffectState)
    const setIsAnswered = useSetRecoilState(isAnsweredState)
    const { questionNumber } = useParams<{ questionNumber: string }>()
    const githubPath = process.env.NODE_ENV === 'production' ? '/w-w' : ''
    const path = `${githubPath}/question/${String(Number(questionNumber) + 1)}`
    const refreshQuestion = useRecoilRefresher_UNSTABLE(getQuestionState)
    const handleQuestionReset = () => {
        setResult(null)
        refreshQuestion()
        setIsAnswered(false)
    }
    if (result) {
        return (
            <section id="result">
                <h3 id="result-text-true" className="fade-in">
                    正解！！
                </h3>
                <p className="fade-in-late">
                    <Link to={path} onClick={handleQuestionReset}>
                        次の問題へ進む→
                    </Link>
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
                    <Link to={path} onClick={handleQuestionReset}>
                        次の問題へ進む→
                    </Link>
                </p>
            </section>
        )
    }
}

export default AnswerResult
