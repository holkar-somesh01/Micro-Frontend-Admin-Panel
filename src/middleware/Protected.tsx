import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";

interface ProtectedRouteProps {
    compo: JSX.Element;
}

const Protected: React.FC<ProtectedRouteProps> = ({ compo }) => {
    const user = useSelector((state: RootState) => state.auth?.user);

    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return compo;
};

export default Protected;