import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'
import './loading.scss'

const Loading = () => {
    return (
        <div id="loading">
            <Center h="100%">
                <Spinner size="xl" />
            </Center>
        </div>
    )
}

export default Loading
