import React, { useCallback } from 'react'
import Button from '@mui/material/Button'
import { useHistory } from 'react-router'

const Home = (): JSX.Element => {
  const history = useHistory()
  const start = useCallback(() => {
    history.push('/question')
  }, [])
  
  return (
    <main>
      <p><img src={`${process.env.PUBLIC_URL}/school_blazer_couple.png`} alt="中学生" /></p>
      <Button variant="contained" onClick={start}>問題を開始する</Button>
      <p>全部で１０問</p>
    </main>
  )
}

export default Home
