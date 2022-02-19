import React from 'react'
import { useRecoilState } from 'recoil'
import isMenuListState from '../../atoms/isMenuList'
import './menu.scss'

const Menu = (): JSX.Element => {
    const [active, setActive] = useRecoilState(isMenuListState)
    const handleSideMenu = () => (active ? setActive(false) : setActive(true))
    const menuState = (active: boolean | null): string => {
        if (active) {
            return 'open-side-menu'
        } else if (active === false) {
            return 'close-side-menu'
        } else {
            return ''
        }
    }

    return (
        <div className={`hamburger ${menuState(active)}`} onClick={handleSideMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Menu
