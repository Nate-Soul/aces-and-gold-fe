import Link from "next/link";

Link

const CheckoutLayout = () => {
  return (
    <section className="py-14">
      <div className="container">
        <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
                <h3 className="font-semibold text-xl mb-8">Review Your Shipping Information</h3>
                <form>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <label htmlFor="firstName" className="form-label">First Name <span className="text-red-500">*</span></label>
                            <input type="text" name="first_name" id="firstName" className="form-control" />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" name="last_name" id="lastName" className="form-control" />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="emailAddress" className="form-label">Email Address</label>
                            <input type="email" name="email_address" id="emailAddress" className="form-control" />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="phone" className="form-label">Mobile</label>
                            <input type="tel" name="phone" id="phone" className="form-control" />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="address1" className="form-label"> Address 1</label>
                            <input type="text" name="address_1" id="address1" className="form-control" />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="address2" className="form-label"> Address 2</label>
                            <input type="text" name="address_2" id="address2" className="form-control" />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" name="city" id="city" className="form-control"/>
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="state" className="form-label">State / Province / Region</label>
                            <input type="text" name="state" id="state" className="form-control"/>
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="country" className="form-label">Country</label>
                            <input type="text" name="country" id="country" className="form-control"/>
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="zipCode" className="form-label">Zip / Postal Code</label>
                            <input type="number" name="zipCode" id="zipCode" className="form-control"/>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="orderNotes" className="form-label">Order Notes</label>
                            <textarea name="order_notes" id="orderNotes" cols="30" rows="4" className="form-control"></textarea>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-span-4 shadow-lg rounded-3xl p-5">
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
                <Link href="/cart" className="block text-center mt-4 text-main-600 hover:line-through hover:text-main">
                    Update Cart
                </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default CheckoutLayout
