import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="py-4 bg-main text-white">
      <div className="container flex items-center justify-between">
        <ul className="flex items-center gap-6">
          <li className="flex items-center gap-1">
            <span className="bi bi-search"></span>
          </li>
          <li className="flex items-center gap-1">
            <span className="bi bi-list"></span>
            <span>Categories</span>
          </li>
        </ul>
        <Link href="/">
          <Image src="/aces-and-gold-logo-1.svg" height={35} width={100} alt="Aces and Gold logo"/>
        </Link>
        <ul className="flex items-center gap-6">
          <li>
            <a href="#" className="hover:text-secondary">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
