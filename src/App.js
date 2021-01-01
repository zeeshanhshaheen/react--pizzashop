import React from "react";
import { Banner } from "./Banner/Banner";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import GlobalStyle from "./GlobalStyles";
import { useOpenFood } from "./hooks/useOpenFood";
import { Menu } from "./Menu/Menu";
import { Navbar } from "./NavBar/NavBar";
import { Order } from "./order/Order";
import { useOrders } from "./hooks/useOrders";
import { useTitle } from "./hooks/useTitle";

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({ ...openFood, ...orders });

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Order {...orders} {...openFood} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
