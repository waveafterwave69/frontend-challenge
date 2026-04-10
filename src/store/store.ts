import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './slices/favoriteSlice'
import { loadState, saveState } from '../utils/utils'

const persistedState = loadState()

export const store = configureStore({
    reducer: {
        favorites: favoriteReducer,
    },
    preloadedState: {
        favorites: persistedState,
    },
})

store.subscribe(() => {
    saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
