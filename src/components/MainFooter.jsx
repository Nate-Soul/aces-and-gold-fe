import Link from "next/link";

const MainFooter = () => {

  return (
    <footer className="bg-light text-main py-12">
      <div className="container">
        <div className="grid grid-cols-4 gap-8">
            <div>
                <h6 className="uppercase font-semibold mb-5">About Aces &amp; Gold</h6>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nostrum repellendus ipsam deleniti aliquam? Et iure dolore reprehenderit aperiam iste...
                </p>
                <ul className="flex items-centetr gap-4 text-2xl mt-5">
                    <li>
                        <Link href="#">
                            <span className="bi bi-facebook"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <span className="bi bi-twitter"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <span className="bi bi-instagram"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <span className="bi bi-linkedin"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <span className="bi bi-pinterest"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <span className="bi bi-youtube"></span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h6 className="uppercase font-semibold mb-5">Quick Links</h6>
                <ul className="flex flex-col gap-3">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="#">About Us</Link>
                    </li>
                    <li>
                        <Link href="#">Contact Us</Link>
                    </li>
                    <li>
                        <Link href="#">Find a store</Link>
                    </li>
                    <li>
                        <Link href="#">FAQs</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h6 className="uppercase font-semibold mb-5">Customer Care</h6>
                <ul className="flex flex-col gap-3">
                    <li>
                        <Link href="#">Free Shipping</Link>
                    </li>
                    <li>
                        <Link href="#">In-store Engraving</Link>
                    </li>
                    <li>
                        <Link href="#">Free 30 Days Returns</Link>
                    </li>
                    <li>
                        <Link href="#">60 Days Free Resizing </Link>
                    </li>
                    <li>
                        <Link href="#">Smart Gifting</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h6 className="uppercase font-semibold mb-5">Our Policies</h6>
                <ul className="flex flex-col gap-3">
                    <li>
                        <Link href="#">Terms of Use</Link>
                    </li>
                    <li>
                        <Link href="#">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="#">Cookies Policy</Link>
                    </li>
                    <li>
                        <Link href="#">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                        <Link href="#">Return &amp; Refund Policy</Link>
                    </li>
                </ul>
            </div>
            <div className="col-span-full flex justify-between items-center">
                <p><span className="font-medium">Aces &amp; Gold</span> &copy; 2023. All Rights Reserved </p>
                <button className="rounded-3xl py-2 px-3 bg-main text-white inline-flex gap-1 items-center">
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
