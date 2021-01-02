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
import { OrderDialog } from "./order/OrderDialog";
import { useOrderDialog } from "./hooks/useOrderDialog";

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  const orderDialog = useOrderDialog();

  useTitle({ ...openFood, ...orders });

  return (
    <>
      <GlobalStyle />
      <OrderDialog {...orderDialog} {...orders} />
      <FoodDialog {...openFood} {...orders} />
      <Navbar {...auth} />
      <Order {...orders} {...openFood} {...auth} {...orderDialog} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
