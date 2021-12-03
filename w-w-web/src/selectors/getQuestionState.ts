import { selector } from 'recoil'
import axios from 'axios'
import { answerResult } from '../types/type'

const getQuestionState = selector<answerResult>({
  key: 'getQuestion',
  get: async () => {
    const url = typeof process.env.REACT_APP_API_URL != 'undefined' ? process.env.REACT_APP_API_URL : ''
    console.log(url)
    const response = await axios.get(url)
    console.log(response)
    return response.data
  },
})

export default getQuestionState
