import React from "react";
import { Banner } from "./Banner/Banner";
import GlobalStyle from "./GlobalStyles";
import { Navbar } from "./NavBar/NavBar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <div>Hello</div>
    </>
  );
}

export default App;
