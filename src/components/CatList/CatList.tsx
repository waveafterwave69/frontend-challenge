import type { FC } from 'react'

import styles from './CatList.module.css'

import type { CatData } from '../../types/cats'

import CatItem from '../CatItem/CatItem'

interface CatListProps {
    catList: CatData[]
}

const CatList: FC<CatListProps> = (props) => {
    return (
        <>
            <ul className={styles.content__list}>
                {props.catList.map((cat: CatData) => (
                    <CatItem key={cat.id} cat={cat} />
                ))}
            </ul>
        </>
    )
}

export default CatList
