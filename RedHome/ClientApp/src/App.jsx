import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  async function logAdvertisement() {
    const response = await fetch("http://localhost:5242/Advertisement");
    const advertisement = await response.json();
    console.table(advertisement[1].city);
  }

  logAdvertisement();
  
  return (
    <>
      <RegisterPage/>
    </>
  )
}

export default App
