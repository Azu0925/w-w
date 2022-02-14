import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useRecoilValue, useRecoilRefresher_UNSTABLE, useSetRecoilState } from 'recoil'
import answerResultsState from '../atoms/answerResults'
import resultEffectState from '../atoms/resultEffect'
import getQuestionState from '../selectors/getQuestionState'

const AnswerChoiceButton = (props: { name: string; id: number }): JSX.Element => {
    const { name, id } = props
    const { questionNumber } = useParams<{ questionNumber: string }>()
    const githubPath = process.env.NODE_ENV === 'production' ? '/w-w' : ''
    const path = githubPath + '/question/' + String(Number(questionNumber) + 1)
    const history = useHistory()
    const answerList = useRecoilValue(answerResultsState)
    const setResult = useSetRecoilState(resultEffectState)
    const refreshQuestion = useRecoilRefresher_UNSTABLE(getQuestionState)
    const handleChangeSelect = async () => {
        if (answerList[0].answerNumber === id) {
            console.log('正解')
            setResult(true)
        } else {
            console.log('不正解')
            setResult(false)
        }
        await new Promise((resolve) => setTimeout(resolve, 3000))
        history.push(path)
        setResult(null)
        refreshQuestion()
    }

    return <button onClick={handleChangeSelect}>{name}</button>
}

export default AnswerChoiceButton
