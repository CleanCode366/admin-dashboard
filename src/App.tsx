// import { RouterProvider } from 'react-router-dom';
// import router from './routes';

import { RouterProvider } from 'react-router-dom'
import router from './routes'
// import styles from "./App.module.css";
import { AuthProvider } from "./context/AuthContext";
import TestCard from "./TestCard";
import LoginCard from "./LoginCard";
// import * from '@mui/styled-engine-sc' as styledEngineSC;,
// import { LanguageProvider } from "./context/LanguageContext";
// import CustomTranslate from "./textTranslation/CustomTranslate";


function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <TestCard />
      <LoginCard />
    </AuthProvider>
  )
}
export default App
