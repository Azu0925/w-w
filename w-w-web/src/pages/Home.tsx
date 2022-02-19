import { Button } from '@chakra-ui/react'
import React, { useCallback } from 'react'
import { useHistory } from 'react-router'
import './home.scss'
import Header from '../components/headers/Header'
import MenuList from '../components/headers/MenuList'

const Home = (): JSX.Element => {
    const history = useHistory()
    const path = process.env.NODE_ENV === 'production' ? '/w-w' : ''
    const start = useCallback(() => {
        history.push(path + '/question/1')
    }, [])

    return (
        <>
            <div className="top-content">
                <div>
                    <p id="icon-wrap">
                        <img src={`${process.env.PUBLIC_URL}/icon.svg`} alt="w-w" id="home-icon" />
                    </p>
                    <p id="sub-title">スキマで暗記</p>
                </div>
            </div>
            <Button
                width="100%"
                height="60px"
                fontSize="1.5em"
                fontWeight="light"
                background={'primary.main'}
                color={'primary.whiteText'}
                _hover={{ bg: 'primary.sub' }}
                onClick={start}
                className="button"
            >
                問題を開始する
            </Button>
        </>
    )
}

export default Home
