import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeroPage from "./pages/HeroPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";
import AdvertisingPage from './pages/AdvertisingPage';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HeroPage/>
    },
    {
      path: '/login',
      element: <LoginPage/>
    },
    {
      path: '/register',
      element: <RegisterPage/>
    },
    {
      path: '/search',
      element: <SearchPage/>
    },
    {
      path: '/search/advertising/:id',
      element: <AdvertisingPage/>
    },
  ]); 
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App