import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import isMenuListState from '../../atoms/isMenuList'
import './menuList.scss'

const MenuList = (): JSX.Element => {
    const githubPath = process.env.NODE_ENV === 'production' ? '/w-w' : ''
    const path = `${githubPath}/`
    const [active, setActive] = useRecoilState(isMenuListState)
    const handleCloseMenu = () => {
        setActive(false)
        console.log('メニュー操作閉じる')
    }
    const menuState = (active: boolean | null): string => {
        if (active) {
            return 'active'
        } else if (active === false) {
            return 'passive'
        } else {
            return ''
        }
    }

    return (
        <div className={`menu-list ${menuState(active)}`}>
            <ul>
                <li>
                    <p>
                        <Link to={path} onClick={handleCloseMenu}>
                            HOME
                        </Link>
                    </p>
                </li>
                <li>
                    <p>
                        <a>RESULT</a>
                    </p>
                </li>
                <li></li>
            </ul>
        </div>
    )
}

export default MenuList
