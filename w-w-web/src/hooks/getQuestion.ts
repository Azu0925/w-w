import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import answerResultsState from '../atoms/answerResults'
import axios from 'axios'
import { answerResult } from '../types/type'

const useGetQuestion = () => {
  const url = typeof process.env.REACT_APP_API_URL != 'undefined' ? process.env.REACT_APP_API_URL : ''
  const [question, setQuestion] = useState<answerResult>()
  const [answerResults, setAnswerResults] = useRecoilState(answerResultsState)

  useEffect(() => {
    axios.get(url).then((res) => {
      setQuestion(res.data)
    })
  })
}

export default useGetQuestion
