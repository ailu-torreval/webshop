import React from "react";

export default function PrimaryBtn(props) {
  function addToBasket() {
    props.setBasket((old) => old.concat(props));
  }
  return (
    <button onClick={addToBasket} id="prim-btn">
      Add To Basket
    </button>
  );
}
