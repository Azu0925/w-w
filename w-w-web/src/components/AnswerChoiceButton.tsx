import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import answerResultsState from '../atoms/answerResults'
import isAnsweredState from '../atoms/isAnswered'
import resultEffectState from '../atoms/resultEffect'

const AnswerChoiceButton = (props: { name: string; id: number }): JSX.Element => {
    const { name, id } = props
    const answerList = useRecoilValue(answerResultsState)
    const setResult = useSetRecoilState(resultEffectState)
    const [isAnswered, setIsAnswerd] = useRecoilState(isAnsweredState)
    const handleChangeSelect = () => {
        answerList[0].answerNumber === id ? setResult(true) : setResult(false)
        setIsAnswerd(true)
    }

    return (
        <Button
            width="100%"
            height="60px"
            marginBottom="20px"
            fontSize="1.5em"
            fontWeight="light"
            justifyContent="flex-start"
            background={'primary.main'}
            color={'primary.whiteText'}
            _hover={{ bg: 'primary.sub' }}
            onClick={handleChangeSelect}
            isDisabled={isAnswered}
        >
            {name}
        </Button>
    )
}

export default AnswerChoiceButton
