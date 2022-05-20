import Nav from "./Nav";
import ProductList from "./ProductList";
import BasketContainer from "./BasketContainer";
import { useState} from "react";

function App() {
  const [basket, setBasket] = useState([]);
  return (
    <>
      <Nav />
      <ProductList setBasket={setBasket} />
      <BasketContainer setBasket={setBasket} basket={basket} />
    </>
  );
}

export default App;
