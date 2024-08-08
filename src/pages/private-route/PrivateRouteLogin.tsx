import { Navigate, Outlet } from "react-router-dom";


export const PrivateRouteLogin = () =>{
    const isAuthenticated=sessionStorage.getItem('token');
    return(
        isAuthenticated ? <Outlet/> : <Navigate to={'/'}/>
    );
}

const PrivateRouteOther = () =>{
    const isAuthenticated=sessionStorage.getItem('token');
    return(
        isAuthenticated ? <Outlet/> : <Navigate to={'/'}/>
    );
}

export default PrivateRouteOther;