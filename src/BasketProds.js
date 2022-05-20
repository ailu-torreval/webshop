import React from "react";
import Product from "./Product";

export default function BasketProds(props) {
  function handleDeletion(id) {
    props.setBasket((old) => old.filter((prod) => prod.id !== id));
  }
  return (
    <div>
      {props.basket.map((prod) => (
        <>
          <Product key={prod.id} {...prod} />
          <div className="bskt-delete-container">
            <p>Quantity: 0</p>
            <button
              onClick={() => {
                handleDeletion(prod.id);
              }}
            >
              Delete Item
            </button>
          </div>
        </>
      ))}
    </div>
  );
}
