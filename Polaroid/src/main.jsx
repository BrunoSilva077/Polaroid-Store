import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import ErrorPage from './pages/Error/Error';
import Shop from './pages/Shop/Shop';
import ProfileProduct from './pages/Shop/ProfileProduct';
import AdminPage from './pages/Admin/AdminPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop/:id",
    element: <ProfileProduct />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
    errorElement: <ErrorPage />,
  },
]);

const Main = () => {
  useEffect(() => {
    const productsArray = [
      {
        id: 1,
        name: "Polaroid Camera 1",
        price: 100,
        image: "/Polaroid-removebg.png",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sint earum et.",
      },
      {
        id: 2,
        name: "Polaroid Camera 2",
        price: 100,
        image: "/Polaroid-removebg3.png",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sint earum et.",
      },
      {
        id: 3,
        name: "Polaroid Camera 3",
        price: 100,
        image: "/Polaroid-removebg3.png",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sint earum et.",
      },
      {
        id: 4,
        name: "Polaroid Camera 4",
        price: 100,
        image: "/Polaroid-removebg.png",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sint earum et.",
      },
      {
        id: 5,
        name: "Polaroid Camera 5",
        price: 100,
        image: "/Polaroid-removebg3.png",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sint earum et.",
      },
      {
        id: 6,
        name: "Polaroid Camera 6",
        price: 100,
        image: "/Polaroid-removebg3.png",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sint earum et.",
      },
      {
        id: 7,
        name: "Polaroid Camera 7",
        price: 100,
        image: "/Polaroid-removebg.png",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sint earum et.",
      },
      {
        id: 8,
        name: "Polaroid Camera 8",
        price: 100,
        image: "/Polaroid-removebg3.png",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sint earum et.",
      },
    ];

    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(productsArray));
    }
  }, []);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
