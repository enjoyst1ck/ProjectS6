function App() {
  async function logAdvertisement() {
    const response = await fetch("http://localhost:5242/Advertisement");
    const advertisement = await response.json();
    console.table(advertisement[1].city);
  }

  logAdvertisement();
  
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
