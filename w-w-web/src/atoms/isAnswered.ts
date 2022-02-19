import { atom } from 'recoil'

const isAnsweredState = atom({
    key: 'isAnsweredState',
    default: false,
})

export default isAnsweredState
