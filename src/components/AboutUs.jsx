import Image from "next/image";
import SectionHeading from "./SectionHeading";
import AboutUsImg from "../media/images/categories/image_4.webp";


const AboutUs = () => {
  return (
    <section className="py-14">
      <div className="container">
        <SectionHeading title="About Us" column={true}/>
        <div className="grid grid-cols-2 gap-8">
            <picture>
                <Image src={AboutUsImg} height={300} width={400}/>
            </picture>
            <article className="about-us-text">
              <p>
                Aces and Gold is an online dealer of luxurious and high-grade jewelries and watches. Our passion for exquisite jewelry and watches has been the driving force behind our business. At Aces and Gold, we believe that every piece of jewelry or watch is a representation of the wearer's personality and style, which is why we carefully curate our collection to offer our customers a range of stunning, high-quality pieces.
              </p>
              <p>
                Our collection of jewelry and watches includes a wide range of items, from engagement rings and wedding bands to bracelets, necklaces, earrings, and luxury timepieces. Our collection is carefully selected to cater to different tastes, styles, and preferences, ensuring that every customer can find the perfect piece that complements their personality and style.
              </p>
              <p>
                At Aces and Gold, we are committed to providing exceptional customer service and ensuring that our customers have a delightful shopping experience. Our knowledgeable and experienced team is always available to assist customers in selecting the perfect piece and answering any questions they may have about our products or services.
              </p>
              <p>
                We take pride in offering a range of high-quality, authentic, and luxurious pieces that are sure to make a statement. Whether you are looking for a classic piece or a modern and stylish item, we have something for everyone. Our online store provides a safe and secure shopping experience, with a user-friendly interface that allows customers to browse, purchase, and track their orders with ease.
              </p>
              <p>
                At Aces and Gold, we are committed to making every customer feel special and valued. We strive to provide an exceptional shopping experience and ensure that our customers are completely satisfied with their purchases. We are dedicated to building long-term relationships with our customers, and we look forward to being your go-to dealer for high-grade jewelries and watches.
              </p>
            </article>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
