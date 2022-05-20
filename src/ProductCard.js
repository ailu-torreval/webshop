import React from "react";
import ProdCounter from "./ProdCounter";
import PrimaryBtn from "./PrimaryBtn";
import Product from "./Product";
import MoreInfo from "./MoreInfo";
import { useState } from "react";

export default function ProductCard(props) {
  const [showMore, setShowMore] = useState(false);
  function handleShowMore() {
    showMore ? setShowMore(false) : setShowMore(true);
  }
  return (
    <div className="product">
      <Product {...props} />
      <button onClick={handleShowMore}>
        {showMore ? "Hide" : "Show More..."}
      </button>
      {showMore ? <MoreInfo {...props} /> : []}
      <div className="prodUI">
        <ProdCounter {...props} />
        <PrimaryBtn setBasket={props.setBasket} {...props} />
      </div>
    </div>
  );
}
