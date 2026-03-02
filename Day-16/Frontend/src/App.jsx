import { RouterProvider } from "react-router"
import { router } from "./app.routes"
import"./features/shared/global.scss"
import { AuthProvider } from "./features/auth/auth.context"
import { PostContextProvider } from "./features/posts/post.context"

import axios from 'axios';

// This ensures cookies are sent with every request
axios.defaults.withCredentials = true; 

// If you use JWT in headers, you need an interceptor
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // or however you store it
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


function App() {
  return (
    <AuthProvider>
      <PostContextProvider>
      <RouterProvider router={router} />
      </PostContextProvider>
    </AuthProvider>
  );
}

export default App
