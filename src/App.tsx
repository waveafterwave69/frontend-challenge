import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import MainPage from './pages/MainPage/MainPage'
import FavoritePage from './pages/FavoritePage/FavoritePage'

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: 'favorites',
                element: <FavoritePage />,
            },
        ],
    },
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App
