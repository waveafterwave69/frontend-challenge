import { useState, type FC } from 'react'
import { Link } from 'react-router'

import styles from './CatItem.module.css'

import type { CatData } from '../../types/cats'

import { useAppDispatch, useAppSelector } from '../../hooks/useRTK'
import {
    addToFavorites,
    deleteFromFavorites,
} from '../../store/slices/favoriteSlice'

interface CatItemProps {
    cat: CatData
}

const CatItem: FC<CatItemProps> = ({ cat }) => {
    const [isImgLoading, setIsImgLoading] = useState(true)

    const dispatch = useAppDispatch()

    const imageUrl =
        cat.image?.url || `https://thecatapi.com{cat.reference_image_id}.jpg`

    const isFavorite = useAppSelector((state) =>
        state.favorites.favoriteCats.some((fav) => fav.id === cat.id),
    )

    const toggleFavorite = () => {
        if (!isFavorite) {
            dispatch(addToFavorites(cat))
        } else {
            dispatch(deleteFromFavorites(cat.id))
        }
    }

    return (
        <li className={styles.cat__item}>
            <div className={styles.image_wrapper}>
                {isImgLoading && <div className={styles.skeleton} />}

                <Link to={`/cats/${cat.id}`}>
                    <img
                        className={styles.cat__img}
                        src={imageUrl}
                        alt={cat.name}
                        style={{ display: isImgLoading ? 'none' : 'block' }}
                        onLoad={() => setIsImgLoading(false)}
                    />
                </Link>

                {/* Кнопка-сердечко */}
                <button
                    className={`${styles.favorite_btn} ${isFavorite ? styles.is_active : ''}`}
                    onClick={toggleFavorite}
                >
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://w3.org"
                    >
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            stroke="#FF0000"
                            strokeWidth="2"
                        />
                    </svg>
                </button>
            </div>
        </li>
    )
}

export default CatItem
