import React from "react";
import my_self from "../images/Moi.jpg";

export default function MyImage() {
  return (
    <div className="my-image">
      <img src={my_self} alt="" />
    </div>
  );
}
