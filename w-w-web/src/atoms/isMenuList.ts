import { atom } from 'recoil'

const isMenuListState = atom<boolean | null>({
    key: 'isMenuListState',
    default: null,
})

export default isMenuListState
