import type { FC } from 'react'

import styles from './Loader.module.css'

import loaderImg from '../../img/spinner.svg'

const Loader: FC = () => {
    return (
        <>
            <div className={styles.container}>
                <img
                    className={styles.loader}
                    src={loaderImg}
                    alt="Загрузка..."
                />
            </div>
        </>
    )
}

export default Loader
