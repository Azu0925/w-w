import React from 'react'
import { RecoilRoot } from 'recoil'
import './App.css'
import Router from './routes/Router'

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </div>
  )
}

export default App
