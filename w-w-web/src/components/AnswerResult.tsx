import React from 'react'
import { useRecoilValue } from 'recoil'
import resultEffectState from '../atoms/resultEffect'

const AnswerResult = (): JSX.Element => {
  const result = useRecoilValue(resultEffectState)
  if (result) {
    return <h3>正解！！！</h3>
  } else if (result === null) {
    return <></>
  } else {
    return <h3>不正解！！</h3>
  }
}

export default AnswerResult
