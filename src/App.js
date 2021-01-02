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
import { useAuthentication } from "./hooks/useAuthentication";

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  useTitle({ ...openFood, ...orders });

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar {...auth} />
      <Order {...orders} {...openFood} {...auth} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
