import React, { useState } from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...props }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
