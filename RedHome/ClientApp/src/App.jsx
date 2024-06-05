import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserAdvertisingPage from "./pages/UserAdvertisingPage";

function App() {
  // async function logAdvertisement() {
  //   const response = await fetch("http://localhost:7004/Advertisement");
  //   const advertisement = await response.json();
  //   console.table(advertisement[1].city);
  // }

  // logAdvertisement();
  
  return (
    <>
      <UserAdvertisingPage/>
    </>
  )
}

export default App
