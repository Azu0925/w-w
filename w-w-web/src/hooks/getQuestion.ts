import { useEffect, useState } from 'react'
import axios from 'axios'
import { answerResult } from '../types/type'

const useGetQuestion = () => {
  const url = typeof process.env.REACT_APP_API_URL != 'undefined' ? process.env.REACT_APP_API_URL : ''
  const [question, setQuestion] = useState<answerResult>()

  useEffect(() => {
    axios.get(url).then((res) => {
      setQuestion(res.data)
    })
  })

  return [question, setQuestion]
}

export default useGetQuestion
