import { useEffect, useState, useRef, type FC } from 'react'
import styles from './MainPage.module.css'
import catsApi from '../../services/cats'
import type { CatData } from '../../types/cats'
import CatItem from '../../components/CatItem/CatItem'
import Loader from '../../UI/Loader/Loader'

const MainPage: FC = () => {
    const [cats, setCats] = useState<CatData[]>([])
    const [page, setPage] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const observerTarget = useRef<HTMLDivElement>(null)

    const getCatsData = async () => {
        if (isLoading) return

        try {
            setIsLoading(true)
            setError(null)

            const newData = await catsApi.getCats(20, page)

            setCats((prev) => [...prev, ...newData])
            setPage((prev) => prev + 1)
        } catch (err: any) {
            setError('Ошибка загрузки котиков.')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isLoading && !error) {
                    getCatsData()
                }
            },
            { threshold: 1.0 },
        )

        if (observerTarget.current) {
            observer.observe(observerTarget.current)
        }

        return () => observer.disconnect()
    }, [cats, isLoading, error])

    return (
        <div className="container">
            <div className={styles.content}>
                <ul className={styles.content__list}>
                    {cats.map((cat: CatData, index) => (
                        <CatItem key={`${cat.id}-${index}`} cat={cat} />
                    ))}
                </ul>

                <div ref={observerTarget} className={styles.observer_target}>
                    {isLoading && <Loader />}
                </div>

                {error && (
                    <div className={styles.error__container}>
                        <p className={styles.error__text}>⚠️ {error}</p>
                        <button
                            className={styles.retry__button}
                            onClick={getCatsData}
                        >
                            Повторить попытку
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MainPage
