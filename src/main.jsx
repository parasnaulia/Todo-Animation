import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContent from './MainContent.jsx'
import LoginPage from './LoginPage.jsx'


const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:'/',
      element:<MainContent/>
    },
    {
       path:"login",
       element:<LoginPage/>

    }
   
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />

    </RouterProvider>
   
  </React.StrictMode>,
)
