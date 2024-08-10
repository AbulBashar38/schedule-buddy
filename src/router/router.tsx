import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import LoginPage from "../pages/Login/LoginPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />
    },
    {
        path: '/login',
        element: <LoginPage />
    }
])