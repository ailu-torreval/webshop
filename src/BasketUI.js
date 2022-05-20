import React from "react";

export default function BasketUI(props) {
  const basketPrices = props.basket.map((prod) => prod.price);
  const initialValue = 0;
  const totalPrice = basketPrices.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return (
    <div>
      <p>Total Items: {props.basket.length} </p>
      <p>Total: {totalPrice}kr.</p>
    </div>
  );
}
