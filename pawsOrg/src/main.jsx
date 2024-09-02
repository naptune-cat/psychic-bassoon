import React from 'react'
import  ReactDOM  from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  
import Home from './components/Home.jsx'
import Layout from './Layout.jsx'
import Pets from './components/Pets.jsx'
import Contact from './components/Contact.jsx'
import AboutUs from './components/AboutUs.jsx'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout/>,
    children: [
      {path: "",
        element:<Home />
      },
      {path: "pets",
        element:<Pets />
      },
      {
        path: "about",
        element: <AboutUs />
      },
      {
        path: "contact",
        element: <Contact />
      },
      
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}   />
  </React.StrictMode>,
)