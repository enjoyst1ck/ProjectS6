import AdvertisingPage from "./pages/AdvertisingPage";

function App() {
  async function logAdvertisement() {
    const response = await fetch("http://localhost:5242/Advertisement");
    const advertisement = await response.json();
    console.table(advertisement[1].city);
  }

  logAdvertisement();
  
  return (
    <>
      <AdvertisingPage/>
    </>
  )
}

export default App
