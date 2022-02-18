import React from 'react'
import { useRecoilValue } from 'recoil'
import resultEffectState from '../atoms/resultEffect'
import './answerResult.scss'

const AnswerResult = (): JSX.Element => {
    const result = useRecoilValue(resultEffectState)
    if (result) {
        return (
            <section id="result">
                <h3 id="result-text-true">正解！！！</h3>
                <p>
                    <a>次の問題へ進む→</a>
                </p>
            </section>
        )
    } else if (result === null) {
        return <></>
    } else {
        return (
            <section id="result">
                <h3 id="result-text-false">不正解！！！</h3>
                <p>
                    <a>次の問題へ進む→</a>
                </p>
            </section>
        )
    }
}

export default AnswerResult
