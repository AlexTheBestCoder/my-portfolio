import React from "react";

const name = "AlexCoding";

export default function MyName() {
  return (
    <div className="name">
      <h1>
        <span>{"<"}</span>
        {name}
        <span>{" />"}</span>{" "}
      </h1>
    </div>
  );
}
