import Image from "next/image";
import Link from "next/link";

const NavbarTop = () => {
  return (
    <nav className="py-4 bg-main-700 text-white text-sm">
      <div className="container flex items-center justify-between">
        <ul className="flex gap-4 items-center">
            <li className="flex items-center gap-1">
                <Image src="/images/en.jpg" width={25} height={25} alt="English icon"/>
                <span className="bi bi-chevron-down"></span>
            </li>
            <li className="flex items-center gap-1">
                <span className="font-medium uppercase">USD</span>
                <span className="bi bi-chevron-down"></span>
            </li>
        </ul>
        <ul className="flex gap-6 items-center text-2xl">
            <li className="flex items-center gap-1">
              <span className="bi bi-calendar"></span>
            </li>
            <li className="flex items-center gap-1 relative">
              <Link href="/cart">
                <span className="bi bi-bag"></span>
              </Link>
              <span className="absolute top-1 right-0 bg-secondary text-white text-xs w-3 h-3 rounded-full inline-flex justify-center items-center"></span>
            </li>
            <li className="flex items-center gap-1">
              <Link href="/wishlist">
                <span className="bi bi-heart"></span>
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <Link href="/login">
                <span className="bi bi-person-circle"></span>
              </Link>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavbarTop
