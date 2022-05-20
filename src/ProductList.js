import React from "react";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

export default function ProductList(props) {
  const [allData, setAllData] = useState([]);
  const [startPoint, setStartPoint] = useState(0);

  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products?start=" + startPoint)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        console.log(data);
      });
  }, [startPoint]);
  function nextProducts() {
    setStartPoint((old) => old + 10);
  }
  function prevProducts() {
    setStartPoint((old) => old - 10);
  }
  return (
    <section id="prod-section">
      <section id="prod-grid">
        {allData.map((product) => (
          <ProductCard key={product.id} setBasket={props.setBasket} {...product} />
        ))}
      </section>
      <div id="arrows">
        <button onClick={prevProducts}>Previous Page</button>
        <button onClick={nextProducts}>Next Page</button>
      </div>
    </section>
  );
}
