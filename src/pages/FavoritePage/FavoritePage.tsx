import type { FC } from 'react'

import { useAppSelector } from '../../hooks/useRTK'
import CatList from '../../components/CatList/CatList'

interface FavoritePageProps {}

const FavoritePage: FC<FavoritePageProps> = () => {
    const favoriteCats = useAppSelector((state) => state.favorites.favoriteCats)

    return (
        <>
            <CatList catList={favoriteCats} />
        </>
    )
}

export default FavoritePage
