import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import First from './Component/First';
import Friends from './Component/Friends/Friends';
import FriendDetail from './Component/FriendDetail/FriendDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element: <First></First>

      },

      {
        path: 'friends',
        element:<Friends></Friends>,
        loader:() => fetch('https://jsonplaceholder.typicode.com/users')

      },
      {
        path:'friend/:friendId',
        element:<FriendDetail></FriendDetail>,
        loader:({params}) => fetch (`'https://jsonplaceholder.typicode.com/users/${params.friendId}`)

      },


       {path: 'about',
      element: <About></About>
    },
    {
      path:'contact',
      element:<Contact></Contact>


    }





    ]



  }
  




]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
<RouterProvider router={router} ></RouterProvider>

  </React.StrictMode>,
)