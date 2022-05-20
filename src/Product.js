import React from "react";

export default function Product(props) {

  return (
    <div>
      <img
        src={`https://kea-alt-del.dk/t7/images/webp/640/${props.id}.webp`}
        alt=""
      />
      <h3 className="prod-name">{props.productdisplayname}</h3>
      <div className="prod-txt">
        <p className="prod-brand">{props.brandname}</p>
        <p className="price">{props.price} kr.</p>
      </div>
    </div>
  );
}

