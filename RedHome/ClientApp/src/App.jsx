import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  async function logAdvertisement() {
    const response = await fetch("http://localhost:7004/Advertisement");
    const advertisement = await response.json();
    console.table(advertisement[1].city);
  }

  logAdvertisement();

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
