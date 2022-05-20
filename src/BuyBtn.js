import React from "react";
// import { useState, useEffect } from "react";

const endpoint = "https://webshop-2fbc.restdb.io/rest/webshop";
const APIKEY = "626ee689fcf9897eb111a09b";

export default function BuyBtn(props) {
  // const [isClicked, setIsClicked] = useState(false);
  // isClicked ? useEffect(() => {
  //     const customerData = {
  //       name: props.customerName,
  //       address: props.customerAddress,
  //       card: props.customerCardNr,
  //     };

  //     const postData = JSON.stringify(customerData);
  //     fetch(endpoint, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "x-apikey": APIKEY,
  //       },
  //       body: postData,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []) : [] ;

  function handleBuyBtn(e) {
    e.preventDefault();
    const customerData = {
      name: props.customerName,
      address: props.customerAddress,
      card: props.customerCardNr,
    };

    const postData = JSON.stringify(customerData);
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKEY,
      },
      body: postData,
    });
  }
  return <button onClick={handleBuyBtn}>PAY</button>;
}
