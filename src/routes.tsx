import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Todo } from "./pages/Todo/Todo";


const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Login />
      },
    
      {
        path: '/my-todo',
        element: <Todo />
      },
    ],
  }
])

export default router