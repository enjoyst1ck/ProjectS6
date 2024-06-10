import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserAdvertisingPage from "./pages/UserAdvertisingPage";
import UserPanelTile from "./component/UserPanelTile";
import TopBar from "./component/TopBarHelpToDelete";

function App() {
  // async function logAdvertisement() {
  //   const response = await fetch("http://localhost:7004/Advertisement");
  //   const advertisement = await response.json();
  //   console.table(advertisement[1].city);
  // }

  // logAdvertisement();
  
  return (
    <>
    <TopBar></TopBar>
    <UserAdvertisingPage/>
    </>
  )
}

export default App
