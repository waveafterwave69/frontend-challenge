import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { CatData } from '../../types/cats'

interface FavoriteState {
    favoriteCats: CatData[]
}

const initialState: FavoriteState = {
    favoriteCats: [],
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<CatData>) => {
            const exists = state.favoriteCats.find(
                (cat) => cat.id === action.payload.id,
            )
            if (!exists) {
                state.favoriteCats.push(action.payload)
            }
        },
        deleteFromFavorites: (state, action: PayloadAction<string>) => {
            state.favoriteCats = state.favoriteCats.filter(
                (cat) => cat.id !== action.payload,
            )
        },
    },
})

export const { addToFavorites, deleteFromFavorites } = favoriteSlice.actions
export default favoriteSlice.reducer
