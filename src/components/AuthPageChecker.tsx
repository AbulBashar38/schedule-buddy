import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, Outlet } from "react-router";

const AuthPageChecker = () => {
    const { authStatus } = useContext(AuthContext)
    return (authStatus === 'unauthenticated' ? <>
        <Outlet />
    </> : <Navigate to={'/'} />);
}

export default AuthPageChecker;