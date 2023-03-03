import React from "react";

function Tile({ text, title, pic }) {
  return (
    <>
      <section>
        <h2>{title}</h2>
        <p>{text}</p>
        <img src={pic} alt="" />
      </section>
     
    </>
  );
}

export default Tile;
