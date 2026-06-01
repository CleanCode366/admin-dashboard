import { createBrowserRouter } from 'react-router-dom'
import { MainRoutes } from './MainRouters'

const router = createBrowserRouter([MainRoutes], { basename: '/admin' })

export default router
