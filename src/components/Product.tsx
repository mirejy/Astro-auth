import React, { useState } from "react";

export default function ProductCard({ title, price, image, description }) {
  const [openDescription, setOpenDescription] = useState(false);

  return (
    <div className="border rounded mb-2 p-3">
      <p>{title}</p>
      <p>{price}</p>
      <img width={200} height={200} src={image} alt="" />
      {openDescription && <p>{description}</p>}

      <button onClick={() => setOpenDescription(!openDescription)}>
        {!openDescription ? "↓" : "↑"}
      </button>
    </div>
  );
}
