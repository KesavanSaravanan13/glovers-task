import { Navigate, Outlet } from "react-router-dom";


export const PrivateRouteLogin = () =>{
    const isAuthenticated= sessionStorage.getItem('token');
    return(
        !isAuthenticated ? <Outlet/> : <Navigate to={'/userslist'}/>
    );
}

const PrivateRouteOther = () =>{
    const isAuthenticated= sessionStorage.getItem('token');
    return(
        isAuthenticated ? <Outlet/> : <Navigate to={'/login'}/>
    );
}

export default PrivateRouteOther;