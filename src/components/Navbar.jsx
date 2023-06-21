import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";


const Navbar = () => {

  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <nav className="py-4 bg-main text-white">
      <div className="container flex items-center justify-between">
        <ul className="flex items-center gap-6">
          <li className="flex items-center gap-1 cursor-pointer">
            <span className="bi bi-search"></span>
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            <span className="bi bi-list-ul"></span>
            <span>Categories</span>
          </li>
        </ul>
        <Link href="/">
          <Image src="/aces-and-gold-logo-1.svg" height={35} width={100} alt="Aces and Gold logo"/>
        </Link>
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/" className={`${currentUrl === "/" ? "text-secondary": ""} hover:text-secondary`}>Home</Link>
          </li>
          <li>
            <Link href="/products" className={`${currentUrl === "/products" ? "text-secondary" : ""} hover:text-secondary`}>Shop</Link>
          </li>
          <li>
            <Link href="/about" className={`${currentUrl === "/about" ? "text-secondary" : ""} hover:text-secondary`}>About</Link>
          </li>
          <li>
            <Link href="/contact" className={`${currentUrl === "/contact" ? "text-secondary" : ""} hover:text-secondary`}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
