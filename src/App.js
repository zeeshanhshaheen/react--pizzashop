import React from "react";
import { Banner } from "./Banner/Banner";
import GlobalStyle from "./GlobalStyles";
import { Menu } from "./Menu/Menu";
import { Navbar } from "./NavBar/NavBar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Menu />
    </>
  );
}

export default App;
