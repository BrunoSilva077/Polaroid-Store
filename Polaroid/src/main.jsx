import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from  './pages/Home/Home'
import ErrorPage from './pages/error/Error'
import Shop from './pages/Shop/Shop';
import ProfileProduct from './pages/Shop/ProfileProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/shop",
    element: <Shop />,
    errorElement: <ErrorPage />
  },
  {
    path: "/shop/:id",
    element: <ProfileProduct />,
    errorElement: <ErrorPage />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
