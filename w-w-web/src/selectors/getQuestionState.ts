import { selector } from 'recoil'
import axios from 'axios'
import { answerResult } from '../types/type'

const getQuestionState = selector<answerResult>({
    key: 'getQuestion',
    get: async () => {
        const url = process.env.REACT_APP_API_URL ?? ''
        const response = await axios.get(url)
        return response.data
    },
})

export default getQuestionState
