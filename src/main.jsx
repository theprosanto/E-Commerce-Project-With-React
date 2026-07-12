import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import Home from './Home.jsx'
import RootLayout from './Components/RootLayout.jsx';
import Shop from './Pages/Shop/Shop.jsx';
import loginPage from './Pages/Login/loginPage.jsx';
import SingUp from './Pages/Register/SingUp.jsx';




const router = createBrowserRouter([
{
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "login", Component: loginPage },
      { path: "singup", Component: SingUp },
    ],
  },
]);

createRoot(document.getElementById('root')).render(

  
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)
