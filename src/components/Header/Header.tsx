import type { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <nav>
                    <ul className={styles.nav__list}>
                        <li className={styles.list__item}>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ''
                                }
                            >
                                Все котики
                            </NavLink>
                        </li>
                        <li className={styles.list__item}>
                            <NavLink
                                to="/favorites"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ''
                                }
                            >
                                Любимые котики
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
