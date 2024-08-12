import { ReactNode, useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import Layout from "./Layout";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
    const { authStatus } = useContext(AuthContext)
    console.log({ authStatusFrom: authStatus });

    return (authStatus === 'authenticated' ? <Layout></Layout> : <Navigate to={'/login'} />);
    // return <Layout></Layout>
}

export default PrivateRoute;