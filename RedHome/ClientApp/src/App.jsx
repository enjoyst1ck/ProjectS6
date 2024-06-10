import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>home</div>
    },
    {
      path: '/login',
      element: <LoginPage/>
    },
    {
      path: '/register',
      element: <RegisterPage/>
    },
  ]); 
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App