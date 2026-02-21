import {createBrowserRouter} from 'react-router'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'



export const router = createBrowserRouter([
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
     {
        path:"/",
        element:<h1>Welcom to 4 layer architecture of react</h1>
    }
])