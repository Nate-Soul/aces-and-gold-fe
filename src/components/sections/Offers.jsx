import Image from "next/image";

const Offers = () => {

  const offers = [
    {
      id: 1,
      name: "Free Shipping",
      detail: "Your orders are shipped for free once you buy items over $1000.00",
      imageUrl: "/media/images/icons/pickup-truck.svg"
    },
    {
      id: 1,
      name: "Shop & Save",
      detail: "Your orders are shipped for free once you buy items over $1000.00",
      imageUrl: "/media/images/icons/closed-wallet.svg"
    },
    {
      id: 1,
      name: "Discount",
      detail: "Your orders are shipped for free once you buy items over $1000.00",
      imageUrl: "/media/images/icons/discount.svg"
    },
  ];


  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {offers && offers.map((offer) => (
            <div className="flex flex-col items-center gap-3 text-center px-3 py-5 rounded-xl bg-gray-100">
                <Image src={offer.imageUrl} height={50} width={50} alt="free shipping icon"/>
                <h6 className="uppercase text-sm font-semibold">{offer.name}</h6>
                <p>{offer.detail}</p>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Offers
