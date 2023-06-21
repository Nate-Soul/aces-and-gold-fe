const CheckoutLayout = () => {
  return (
    <section className="py-14">
      <div className="container">
        <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2"></div>
            <div className="col-span-1 shadow-lg rounded-3xl p-5">
                <h3 className="font-semibold text-xl mb-5">Review Your Order</h3>
                <header className="border-b flex justify-between py-4">
                    <h6 className="font-semibold">Product</h6>
                    <h6 className="font-semibold">Total <span>$</span></h6>
                </header>
                <div className="flex justify-between gap-3 py-4 border-b">
                    <div className="order-item-list">
                        <p>1 <span className="bi bi-x font-semibold"></span> Brush Brass & Jesmonite Square Ring</p>
                    </div>
                    <div className="order-item-list">
                        <span className="text-main-500 font-medium">1200.00</span>
                    </div>
                </div>
                <div className="flex justify-between gap-3 py-4 border-b">
                    <div className="order-item-list">
                        <p>2 <span className="bi bi-x font-semibold"></span> Sterling Silver Half Circle Earrings</p>
                    </div>
                    <div className="order-item-list">
                        <span className="text-main-500 font-medium">250.59</span>
                    </div>
                </div>
                <div className="flex justify-between gap-3 py-4 border-b">
                    <div className="order-item-list">
                        <p>3 <span className="bi bi-x font-semibold"></span> Freeform Harsh Earrings</p>
                    </div>
                    <div className="order-item-list">
                        <span className="text-main-500 font-medium">2010.10</span>
                    </div>
                </div>
                <div className="flex justify-between gap-3 py-4 border-b">
                    <div className="order-item-list">
                        <p>Shipping Fees</p>
                    </div>
                    <div className="order-item-list">
                        <span className="text-main-500 font-medium">28.00</span>
                    </div>
                </div>
                <div className="flex justify-between gap-3 py-4 border-b">
                    <div className="order-item-list">
                        <p>Duties &amp; Taxes</p>
                    </div>
                    <div className="order-item-list">
                        <span className="text-main-500 font-medium">0.00</span>
                    </div>
                </div>
                <div className="flex justify-between gap-3 py-4 border-b">
                    <div className="order-item-list">
                        <p>Subtotal</p>
                    </div>
                    <div className="order-item-list">
                        <span className="text-main-500 font-semibold">5,600.89</span>
                    </div>
                </div>
                <button className="mt-8 btn btn-main w-full">
                    Place Your Order
                </button>
                <button className="mt-4 btn btn-outline-main w-full">
                    Update Cart
                </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default CheckoutLayout
