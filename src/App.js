import React, { useState } from "react";
import { Banner } from "./Banner/Banner";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import GlobalStyle from "./GlobalStyles";
import { Menu } from "./Menu/Menu";
import { Navbar } from "./NavBar/NavBar";
import { Order } from "./order/Order";

function App() {
  const [openFood, setOpenFood] = useState();

  return (
    <>
      <GlobalStyle />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar />
      <Order />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </>
  );
}

export default App;
