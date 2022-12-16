import React from "react";
import Portrait from "./Portrait.jpg";

export default function Header() {
  return (
    <header>
      <img className="image" src={Portrait} alt="" />
    </header>
  );
}
