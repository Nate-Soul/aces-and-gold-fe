import Image from "next/image";

const NavbarTop = () => {
  return (
    <nav className="py-4 bg-main-700 text-white text-sm">
      <div className="container flex items-center justify-between">
        <ul className="flex gap-4 items-center">
            <li className="flex items-center gap-1">
                <Image src="/images/en.jpg" width={24} height={24} alt="English icon"/>
                <span className="bi bi-chevron-down"></span>
            </li>
            <li className="flex items-center gap-1">
                <span className="font-medium uppercase">USD</span>
                <span className="bi bi-chevron-down"></span>
            </li>
            <li className="flex items-center gap-1">
              <span className="bi bi-calendar"></span>
              Book an appointment
            </li>
        </ul>
        <ul className="flex gap-6 items-center">
            <li className="flex items-center gap-1">
                <span className="bi bi-person"></span>
                <span>My Account</span>
            </li>
            <li className="flex items-center gap-1 relative">
                <span className="bi bi-cart" dir="rtl"></span>
                <span className="absolute top-0 -left-3 bg-main text-white text-xs w-4 h-4 rounded-full inline-flex justify-center items-center">0</span>
                <span>My cart</span>
            </li>
            <li className="flex items-center gap-1">
                <span className="bi bi-heart"></span>
                <span>My Wishlist</span>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavbarTop
