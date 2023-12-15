import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectAuth } from "../redux/authSlice";

const PrivateRoute = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const { token } = useAppSelector(selectAuth);
  console.log(token);
  const location = useLocation();

  if (token) {
    return <>{children}</>;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
