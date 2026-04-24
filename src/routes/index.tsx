import { createBrowserRouter } from 'react-router-dom';
import MainRoutes from './MainRouters';
import WellcomeRoutes from './welcome';

const router = createBrowserRouter([MainRoutes, WellcomeRoutes]);

export default router;
