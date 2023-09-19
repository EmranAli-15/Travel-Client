import React, { useEffect } from 'react';
import './index.css'
import router from './routes/router/Router.jsx';

import { RouterProvider } from "react-router-dom";

import { auth, onAuthStateChanged } from './features/auth/firebase'
import { login, logout } from './features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useJwtMutation } from './features/auth/authApi';

const App = () => {
  const dispatch = useDispatch();
  const [jwt, { }] = useJwtMutation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {

      if (user) {
        dispatch(login({
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        }));
        const email = user.email;
        jwt({ email: email })
      }
      else {
        dispatch(logout());
        localStorage.removeItem('access-token');
      }
    })
    return () => {
      return unsubscribe();
    }
  }, [])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;