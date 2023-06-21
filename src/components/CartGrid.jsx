"use client";

import CartItem from "./CartItem";

import productImg1 from "../media/images/products/i.jpg";
import productImg2 from "../media/images/products/j.jpg";
import productImg3 from "../media/images/products/g.jpg";
import Link from "next/link";


const CartGrid = () => {

    const products = [
        {
            name: "Sterling Silver Half Circle Earrings",
            imageUrl: productImg1,
            price: "1234.56",
            quantity: 3,
            total: "3,703.68"
        },
        {
            name: "Brush Brass & Jesmonite Square Ring",
            imageUrl: productImg2,
            price: "100.45",
            quantity: 1,
            total: "100.45"
        },
        {
            name: "Freeform Harsh Earrings",
            imageUrl: productImg3,
            price: "670",
            quantity: 3,
            total: "2010"
        },
    ]

  return (
    <section className="py-14">
        <div className="container">
            <div className="grid grid-cols-12 gap-y-6">
                <div className="col-span-7">
                    <h6>Product</h6>
                </div>
                <div className="col-span-1">
                    <h6>Price</h6>
                </div>
                <div className="col-span-3">
                    <h6>Quantity</h6>
                </div>
                <div className="col-span-1">
                    <h6>Total</h6>
                </div>
                <div className="col-span-full border-b"></div>
                {
                    products?.map((product, index) => (
                        <CartItem key={index} product={product}/>
                    ))
                }
            </div>
            <div className="grid grid-cols-2 justify-between py-6">
                <div className="col-span-1 justify-self-start w-1/2 flex flex-col gap-6">
                    <h6>Subtotal</h6>
                    <p>
                        Shipping fees, duties and taxes are calculated at checkout.
                    </p>
                </div>
                <div className="col-span-1 justify-self-end w-1/2 flex flex-col gap-6">
                <span className="text-right">{5678.90}</span>
                <Link href="/checkout" className="btn btn-main w-full">
                    Checkout
                </Link>
                <Link href="/products" className="text-main-500 text-center hover:line-through hover:text-main">
                    Continue shopping
                </Link>
                </div>
            </div>
        </div>      
    </section>
  )
}

export default CartGrid
