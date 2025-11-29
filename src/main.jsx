import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './Components/ErrorPage'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home';
import AddProduct from './Components/AddProduct';
import MyCart from './Components/MyCart';
import Login from './Components/Login';
import Registration from './Components/Registration';
import AuthProvider from './Components/Authprovider';
import BrandPage from './Components/BrandPage';
import PrivateRoute from './Components/PrivetRoute';
import DetailsPage from './Components/DetailsPage';
import UpdatePage from './Components/UpdatePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
        loader: ()=> fetch('Homedata.json')
        
      },
      {
        path: "/addProduct",
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/myCart",
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch(`https://technology-and-electronic-server-888spgf0n-rezuans-projects.vercel.app/myCart`)
      },
      {
        path: "/detailsPage/:id",
        element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
        loader: ({params}) => fetch(`https://technology-and-electronic-server-888spgf0n-rezuans-projects.vercel.app/updateProduct/${params.id}`)
      },
      {
        path: "/updatePage/:id",
        element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
        loader: ({params}) => fetch(`https://technology-and-electronic-server-888spgf0n-rezuans-projects.vercel.app/updateProduct/${params.id}`)
      },
      {
        path: "/brandPage/:brand",
        element:<BrandPage></BrandPage>,
        loader: ({params}) => fetch(`https://technology-and-electronic-server-888spgf0n-rezuans-projects.vercel.app/addProduct/${params.brand}`)
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/registration",
        element:<Registration></Registration>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
