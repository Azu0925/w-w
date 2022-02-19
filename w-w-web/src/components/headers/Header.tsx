import React from 'react'
import Menu from './Menu'
import './header.scss'
import { AiFillHome } from 'react-icons/ai'

const Header = (): JSX.Element => {
    const githubPath = process.env.NODE_ENV === 'production' ? '/w-w' : ''
    const path = `${githubPath}/`
    return (
        <header>
            <p>
                <a href={path}>
                    <AiFillHome color="#6667ab" className="home-icon" />
                </a>
            </p>
        </header>
    )
}

export default Header
