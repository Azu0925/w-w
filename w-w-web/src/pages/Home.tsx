import React, { useCallback } from 'react'
import { useHistory } from 'react-router'

const Home = (): JSX.Element => {
    const history = useHistory()
    const path = process.env.NODE_ENV === 'production' ? '/w-w' : ''
    const start = useCallback(() => {
        history.push(path + '/question/1')
    }, [])

    return (
        <main>
            <p>
                <img src={`${process.env.PUBLIC_URL}/icon.svg`} alt="w-w" />
            </p>
            <button onClick={start}>問題を開始する</button>
            <p>全部で１０問</p>
        </main>
    )
}

export default Home
