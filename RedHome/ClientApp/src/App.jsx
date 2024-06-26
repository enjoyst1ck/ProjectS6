import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeroPage from "./pages/HeroPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";
import AdvertisingPage from './pages/AdvertisingPage';
import UserAdvertisingPage from './pages/UserAdvertisingPage';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import ForeignUserPage from './pages/ForeignUserPage';
 

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
    {
      path: '/user-panel/all-added',
      element: <UserAdvertisingPage/>
    },
    {
      path: '/user-panel/all-liked',
      element: <UserAdvertisingPage/>
    },
    {
      path: '/user-panel/settings',
      element: <UserAdvertisingPage/>
    },
    {
      path: '/user-panel/add-advertisement',
      element: <AddPage/>
    },
    {
      path: '/user-panel/edit-advertisement/:id',
      element: <EditPage/>
    },
    {
      path: '/rating/:id',
      element: <ForeignUserPage/>
    }
  ]); 
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App