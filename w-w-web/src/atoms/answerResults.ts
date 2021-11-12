import { atom } from 'recoil'
import { answerResult } from '../types/type'

const answerResultsState = atom<answerResult[]>({
  key: 'answerResults',
  default: [],
})

export default answerResultsState
