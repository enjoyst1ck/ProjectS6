import TopSearchBar from './component/TopSearchBar'
import TopBar from './component/TopBar'
function App() {
  async function logAdvertisement() {
    const response = await fetch("http://localhost:5242/Advertisement");
    const advertisement = await response.json();
    console.table(advertisement[1].city);
  }

  logAdvertisement();
  
  return (
    <>
     <TopSearchBar></TopSearchBar>
  
    </>
  )
}

export default App
