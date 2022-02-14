import React from 'react'
import { RecoilRoot } from 'recoil'
import './App.scss'
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
