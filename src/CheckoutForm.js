import React from "react";
import BuyBtn from "./BuyBtn";
import { useState } from "react";

export default function CheckoutForm() {
  const [customerName, setCustomerName] = useState();
  const [customerAddress, setCustomerAddress] = useState();
  const [customerCardNr, setCustomerCardNr] = useState();

  return (
    <form>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          required
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </label>
      <label htmlFor="address">
        Address:
        <input
          type="text"
          name="address"
          required
          onChange={(e) => setCustomerAddress(e.target.value)}
        />
      </label>
      <label htmlFor="card-nr">
        Card Nr:
        <input
          type="text"
          name="card-nr"
          required
          onChange={(e) => setCustomerCardNr(e.target.value)}
        />
      </label>
      <BuyBtn {...customerName} {...customerAddress} {...customerCardNr} />
    </form>
  );
}
