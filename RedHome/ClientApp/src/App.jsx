import LoginPage from "./pages/LoginPage";

function App() {
  async function logAdvertisement() {
    const response = await fetch("http://localhost:5242/Advertisement");
    const advertisement = await response.json();
    console.table(advertisement[1].city);
  }

  logAdvertisement();
  
  return (
    <>
      <LoginPage/>
    </>
  )
}

export default App
