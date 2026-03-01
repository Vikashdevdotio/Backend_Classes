import {createBrowserRouter} from 'react-router'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import Feed from './features/posts/pages/Feed'
import CreatePost from './features/posts/pages/CreatePost'
import PageNotFound from './features/posts/pages/PageNotFound'



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
        element:<Feed/>
    },
     {
        path:"/create-post",
        element:<CreatePost/>
    },

    {
        path:"*",
        element:<PageNotFound/>
    }
    
])