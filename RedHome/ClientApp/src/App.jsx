import AddPage from "./pages/AddPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import React from "react";

function App() {
  // async function logAdvertisement() {
  //   const response = await fetch("http://localhost:7004/Advertisement");
  //   const advertisement = await response.json();
  //   console.table(advertisement[1].city);
  // }

  // logAdvertisement();
  
  return (
    <>
      <AddPage/>
    </>
  )
}

export default App
