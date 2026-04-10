import type { FC } from 'react'

import styles from './FavoritePage.module.css'

import { useAppSelector } from '../../hooks/useRTK'
import CatList from '../../components/CatList/CatList'

interface FavoritePageProps {}

const FavoritePage: FC<FavoritePageProps> = () => {
    const favoriteCats = useAppSelector((state) => state.favorites.favoriteCats)

    return (
        <>
            <div className="container">
                <div className={styles.content}>
                    <CatList catList={favoriteCats} />
                </div>
            </div>
        </>
    )
}

export default FavoritePage
