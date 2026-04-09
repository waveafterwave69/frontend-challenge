import { api } from './baseUrl'

const catsApi = {
    getCats: async (limit: number = 20, page: number = 0) => {
        try {
            const response = await api.get(
                `/breeds?limit=${limit}&page=${page}`,
            )
            return response.data
        } catch (err) {
            throw new Error(`Ошибка: ${err}`)
        }
    },
    getCatImg: async (breedsId: string) => {
        try {
            const response = await api.get(
                `/images/search?breed_ids=${breedsId}`,
            )
            return response.data
        } catch (err) {
            throw new Error(`Ошибка: ${err}`)
        }
    },
}

export default catsApi
