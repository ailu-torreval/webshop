import React from "react";
import Basket from "./Basket";
import CheckoutForm from "./CheckoutForm";

export default function BasketContainer(props) {
  return (
    <section id="basketContainer">
      <Basket setBasket={props.setBasket} basket={props.basket} />
      <CheckoutForm />
    </section>
  );
}
