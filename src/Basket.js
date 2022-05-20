import React from "react";
import BasketProds from "./BasketProds";
import BasketUI from "./BasketUI";

export default function Basket(props) {
  return (
    <div>
      <h2>Your Basket</h2>
      <BasketProds setBasket={props.setBasket} basket={props.basket} />
      <BasketUI basket={props.basket} />
    </div>
  );
}
