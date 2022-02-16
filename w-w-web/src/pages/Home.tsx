import { Button } from '@chakra-ui/react'
import React, { useCallback } from 'react'
import { useHistory } from 'react-router'
import './home.scss'

const Home = (): JSX.Element => {
    const history = useHistory()
    const path = process.env.NODE_ENV === 'production' ? '/w-w' : ''
    const start = useCallback(() => {
        history.push(path + '/question/1')
    }, [])

    return (
        <main>
            <div className="top-content">
                <div>
                    <p id="icon-wrap">
                        <img src={`${process.env.PUBLIC_URL}/icon.svg`} alt="w-w" id="home-icon" />
                    </p>
                    <p>スキマで暗記</p>
                </div>
            </div>
            <Button background={'primary.main'} color={'primary.whiteText'} onClick={start}>
                問題を開始する
            </Button>
        </main>
    )
}

export default Home
