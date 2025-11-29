import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "./Authprovider";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading) {
        return <>
        <div className="flex justify-center items-center max-w-7xl mx-auto h-screen">
       <span className="loading loading-spinner loading-lg"></span>
      </div>
      </>

    }
    

    if(!user?.email) {
        return <Navigate state={location.pathname} to="/login" />;
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
export default PrivateRoute;