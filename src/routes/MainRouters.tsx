// import OAuthCallback from "@views/Auth/OAuthCallBack";
import BaseLayout from "@layouts/MainLayout/BaseLayout";
// import NotFound from "@views/NotFound/NotFound";
// import HomePage from "@/views/Home/Home";
// import InscriptionDetails from "@/views/InscriptionDetailPage.tsx/InscriptionDetails";
// import Upload from "@/views/Upload/Upload";
// import AuthPage from "@views/Auth/AuthPage";
// import Feed from "@views/Feed/Feed";
// import Gallery from "@views/Gallery/Gallery";
// import Profile from "@views/Profile/Profile";
// import Profile1 from "@views/Profile/Profile1";
// import Setting from "@views/Setting/Setting";
import { Navigate } from "react-router-dom";
import TestCard from "@/TestCard";
import LoginCard from "@/LoginCard";
import NotFound from "@/views/NotFound/NotFound";

const MainRoutes = {
  path: '/',
  element: <BaseLayout />,
  children: [
    {
      index: true,
      element: (
        <NotFound />
      )
    },
    {
      path: '/login',
      element: <LoginCard />
    },
    {
      path: '*',
      element: <TestCard />
    }
  ]
};

export default MainRoutes;
