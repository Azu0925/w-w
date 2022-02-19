import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Question from '../pages/Question'
import Header from '../components/headers/Header'
import MenuList from '../components/headers/MenuList'

const path = process.env.NODE_ENV === 'production' ? '/w-w' : ''
const Router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <MenuList />
                <Switch>
                    <Route exact path={path + '/'} component={Home} />
                    <Route exact path={path + '/question/:questionNumber'} component={Question} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        </BrowserRouter>
    )
}

export default Router
