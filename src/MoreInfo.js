import React from "react";

export default function MoreInfo(props) {
  return (
    <>
      <p>Category: {props.category}</p>
      <p>Season: {props.season}</p>
    </>
  );
}
