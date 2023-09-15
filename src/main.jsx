import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Aparelhos from './routes/Aparelhos/index.jsx'
import Home from './routes/Home/index.jsx'
import VisualizarAparelho from './routes/VisualizarAparelho/index.jsx'
import Error from './routes/Error/index.jsx'
import { createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/aparelhos",
        element: <Aparelhos/>
      },
      {
        path: "/aparelhos/visualizar-aparelho/:id",
        element: <VisualizarAparelho/>
      },
      {
        path: "/antiga",
        element: <Navigate to="/"/>
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
