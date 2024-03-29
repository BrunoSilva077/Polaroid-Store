import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from  './pages/Home/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
