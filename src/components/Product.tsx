import React, { useState } from "react";

export default function ProductCard({ product }) {
  const [openDescription, setOpenDescription] = useState(false);

  return (
    <div className="border rounded mb-2 p-3">
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img width={200} height={200} src={product.image} alt="" />
      {openDescription && <p>{product.description}</p>}

      <button onClick={() => setOpenDescription(!openDescription)}>
        Show description
      </button>
    </div>
  );
}
