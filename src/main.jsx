import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "react-router-dom"
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Booklist from './components/Booklist.jsx'
import Addbook from "./components/Addbook.jsx"
import Error from './components/Error.jsx'
import Landing from './components/Landing.jsx'
import Bookdetails from './components/Bookdetails.jsx'
import Category from './components/Category.jsx'

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
      path:"/",
      element:<Landing/>
    },
      {
      path:'/browse',
      element:<Booklist/>
    },
    {
      path:'/addbook',
      element:<Addbook/>
    },
    {
      path:'/book/:id',
      element:<Bookdetails/>
    },
    {
      path:'/books/:category',
      element:<Category/>
    }
  ],
    errorElement:<Error/>
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  
  </StrictMode>,
)
