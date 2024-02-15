"use client";

import { useState } from "react";
import Image from "next/image";

const CartItem = ({ product }) => {

  const [quantity, setQuantity] = useState(product.quantity);

  return (
    <>
      <figure className="col-span-7 flex gap-3">
        <Image
          src={product.imageUrl}
          height={150}
          width={100}
          className="object-cover shadow"
        />
        <figcaption className="flex flex-col gap-4">
          <h5 className="text-semibold text-main-600">{product.name}</h5>
          <p className="text-sm text-red-500">
            Remove <span className="bi bi-trash"></span>
          </p>
        </figcaption>
      </figure>
      <div className="col-span-1">
        <span>{product.price}</span>
      </div>
      <div className="col-span-3">
        <div className="flex items-center gap-3">
          <button
            className="w-8 h-8 items-center justify-center bg-main-500 text-white bg-opacity-100 hover:bg-opacity-75 rounded"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            <span className="bi bi-dash"></span>
          </button>
          <input
            type="text"
            name="quantity"
            id="quantity"
            className="border p-1 text-center"
            size={1}
            value={quantity}
          />
          <button
            className="w-8 h-8 items-center justify-center bg-main-500 text-white bg-opacity-100 hover:bg-opacity-75 rounded"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            <span className="bi bi-plus"></span>
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <h6>{product.total}</h6>
      </div>
      <div className="col-span-full border-b"></div>
    </>
  );
};

export default CartItem;
