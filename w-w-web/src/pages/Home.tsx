import React, { useCallback } from 'react'
import Button from '@mui/material/Button'
import { useHistory } from 'react-router'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
  },
})

const Home = (): JSX.Element => {
  const classes = useStyles()
  const history = useHistory()
  const path = process.env.NODE_ENV === 'production' ? '/w-w' : ''
  const start = useCallback(() => {
    history.push(path + '/question/1')
  }, [])

  return (
    <main className={classes.root}>
      <p>
        <img src={`${process.env.PUBLIC_URL}/school_blazer_couple.png`} alt="中学生" />
      </p>
      <Button variant="contained" onClick={start}>
        問題を開始する
      </Button>
      <p>全部で１０問</p>
    </main>
  )
}

export default Home
