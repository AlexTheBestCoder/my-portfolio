import React from "react";

const name = "AlexCoding";

export default function MyName() {
  return (
    <div className="name">
      <h2>
        <span>{"<"}</span>
        {name}
        <span>{" />"}</span>{" "}
      </h2>
    </div>
  );
}
