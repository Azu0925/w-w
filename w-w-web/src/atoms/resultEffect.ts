import { atom } from 'recoil'

const resultEffectState = atom<boolean | null>({
    key: 'resultEffect',
    default: null,
})

export default resultEffectState
