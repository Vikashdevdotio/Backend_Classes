import { RouterProvider } from "react-router"
import { router } from "./app.routes"
import"./features/shared/global.scss"
import { AuthProvider } from "./features/auth/auth.context"
import { PostContextProvider } from "./features/posts/post.context"




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
