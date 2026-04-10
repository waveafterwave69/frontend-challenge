import type { RootState } from '../store/store'

export const loadState = () => {
    const serializedState = localStorage.getItem('favorites')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
}

export const saveState = (state: RootState) => {
    const serializedState = JSON.stringify(state.favorites)
    localStorage.setItem('favorites', serializedState)
}
