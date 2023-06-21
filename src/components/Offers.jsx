import Image from "next/image";

const Offers = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="grid grid-cols-3 gap-8">
            <div className="col-span-1 flex flex-col items-center gap-3 text-center p-3 rounded-xl bg-gray-100">
                <Image src="/images/pickup truck.svg" height={50} width={50} alt="free shipping icon"/>
                <h6 className="uppercase text-sm font-semibold">Free shipping</h6>
                <p>
                    Your orders are shipped for free once you buy items over $1000.00
                </p>
            </div>
            <div className="col-span-1 flex flex-col items-center gap-3 text-center p-3 rounded-xl bg-gray-100">
                <Image src="/images/discount.svg" height={50} width={50} alt="free shipping icon"/>
                <h6 className="uppercase text-sm font-semibold">Special Discounts</h6>
                <p>
                    Your orders are shipped for free once you buy items over $1000.00
                </p>
            </div>
            <div className="col-span-1 flex flex-col items-center gap-3 text-center p-3 rounded-xl bg-gray-100">
                <Image src="/images/closed wallet.svg" height={50} width={50} alt="free shipping icon"/>
                <h6 className="uppercase text-sm font-semibold">Save More</h6>
                <p>
                    Your orders are shipped for free once you buy items over $1000.00
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Offers
