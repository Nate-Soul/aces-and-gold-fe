import Link from "next/link";

const MainFooter = () => {

  return (
    <footer className="bg-secondary py-12">
      <div className="container">
        <div className="grid grid-cols-4 gap-8">
            <div>
                <h6 className="uppercase font-semibold mb-5">About Aces &amp; Gold</h6>
                <p>
                    At Aces and Gold, we believe that every piece of jewelry or watch is a representation of the wearer's personality and style, which is why we carefully curate our collection to offer our customers a range of stunning, high-quality pieces. <Link href="/about" className="footer-link">Read More</Link>
                </p>
                <ul className="flex items-centetr gap-4 text-2xl mt-5">
                    <li>
                        <Link href="#" className="footer-link">
                            <span className="bi bi-facebook"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="footer-link">
                            <span className="bi bi-twitter"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="footer-link">
                            <span className="bi bi-instagram"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="footer-link">
                            <span className="bi bi-linkedin"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="footer-link">
                            <span className="bi bi-pinterest"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="footer-link">
                            <span className="bi bi-youtube"></span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h6 className="uppercase font-semibold mb-5">Quick Links</h6>
                <ul className="flex flex-col gap-3">
                    <li>
                        <Link href="/" className="footer-link">Home</Link>
                    </li>
                    <li>
                        <Link href="/products" className="footer-link">Shop</Link>
                    </li>
                    <li>
                        <Link href="/about" className="footer-link">About Us</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="footer-link">Contact Us</Link>
                    </li>
                    <li>
                        <Link href="#" className="footer-link">Help</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h6 className="uppercase font-semibold mb-5">Customer Care</h6>
                <ul className="flex flex-col gap-3">
                    <li>
                        <Link href="#" className="footer-link">Free Shipping</Link>
                    </li>
                    <li>
                        <Link href="#" className="footer-link">In-store Engraving</Link>
                    </li>
                    <li>
                        <Link href="#" className="footer-link">Free 30 Days Returns</Link>
                    </li>
                    <li>
                        <Link href="#" className="footer-link">60 Days Free Resizing </Link>
                    </li>
                    <li>
                        <Link href="#" className="footer-link">Smart Gifting</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h6 className="uppercase font-semibold mb-5">Our Policies</h6>
                <ul className="flex flex-col gap-3">
                    <li>
                        <Link href="#" className="footer-link">Terms of Use</Link>
                    </li>
                    <li>
                        <Link href="#" className="footer-link">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="#" className="footer-link">Cookies Policy</Link>
                    </li>
                    <li>
                        <Link href="#" className="footer-link">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                        <Link href="#" className="footer-link">Return &amp; Refund Policy</Link>
                    </li>
                </ul>
            </div>
            <div className="col-span-full flex justify-between items-center">
                <p><span className="font-medium">Aces &amp; Gold</span> &copy; 2023. All Rights Reserved </p>
                <button className="btn btn-main gap-1 fixed bottom-14 right-28">
                    <span className="bi bi-chat"></span>
                    Live Chat
                </button>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default MainFooter
