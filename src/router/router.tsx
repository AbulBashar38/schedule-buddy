import { createBrowserRouter, LoaderFunctionArgs, redirect } from "react-router-dom";
import Layout from "../components/Layout";
import AllUsers from "../pages/AllUsers/AllUsers";
import AuthPage from "../Auth/AuthPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        loader: ({ request }: LoaderFunctionArgs) => {
            const url = new URL(request.url);

            if (url.pathname === "/") {
                return redirect("/all-users");
            }

            return null;
        },
        children: [
            {
                path: '/all-users',
                element: <AllUsers />
            },
            {
                path: '/appointment-list',
                element: <AllUsers />
            }
        ]

    },
    {
        path: '/login',
        element: <AuthPage />
    },
    {
        path: '/sign-up',
        element: <AuthPage />
    }
])