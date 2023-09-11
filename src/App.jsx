import React, { useEffect } from 'react';
import './index.css'
import router from './routes/router/Router.jsx';

import { RouterProvider, useNavigate } from "react-router-dom";

import { auth, onAuthStateChanged } from './features/auth/firebase'
import { login, logout } from './features/auth/authSlice';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          email: user.email
        }));
      } else {
        
      }
    });
  }, [])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;