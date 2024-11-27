import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Home/Main/Main.jsx';
import Hooks from './hooks/Hooks.jsx';
import Login from './Home/Login/Login.jsx';
import AuthProvider from './providers/authprovider.jsx';
import SignUp from './Home/Login/signUp/signUp.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Hooks />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthProvider> */}
    <RouterProvider router={router} />
    {/* </AuthProvider> */}

  </StrictMode>,
)
