import TopSearchBar from './component/TopSearchBar'
function App() {
  async function logAdvertisement() {
    const response = await fetch("http://localhost:5242/Advertisement");
    const advertisement = await response.json();
    console.table(advertisement[1].city);
  }

  logAdvertisement();
  
  return (
    <>
     <TopSearchBar/>
    </>
  )
}

export default App
