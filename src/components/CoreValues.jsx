import SectionHeading from "./SectionHeading"


const CoreValues = () => {
  return (
    <section className="py-14">
        <div className="container">
            <SectionHeading title="Our Core Values" column={true}/>
            <div className="grid grid-cols-5 gap-4">
                <div className="bg-gray-200 text-center p-5">
                    <h5 className="text-xl font-semibold mb-4">Quality</h5>
                    <p>
                    We are committed to upholding the highest standards of quality in every piece we offer. Each item in our collection is carefully crafted with precision and attention to detail, ensuring it withstands the test of time.
                    </p>
                </div>
                <div className="bg-gray-200 text-center p-5">
                    <h5 className="text-xl font-semibold mb-4">Integrity</h5>
                    <p>
                    Honesty and transparency are at the core of our business. We strive to build trust with our customers by providing accurate product information, fair pricing, and exceptional customer service.
                    </p>
                </div>
                <div className="bg-gray-200 text-center p-5">
                    <h5 className="text-xl font-semibold mb-4">Passion</h5>
                    <p>
                    Our love for jewelry and watches drives us to continually seek out the most extraordinary designs and craftsmanship. We are passionate about sharing our expertise and helping our customers find treasures that ignite their own passion.
                    </p>
                </div>
                <div className="bg-gray-200 text-center p-5">
                    <h5 className="text-xl font-semibold mb-4">Individuality</h5>
                    <p>
                    We celebrate individuality and believe that jewelry and watches should be an expression of one's unique style. We embrace diversity and offer a diverse range of designs to suit different tastes and preferences.
                    </p>
                </div>
                <div className="bg-gray-200 text-center p-5">
                    <h5 className="text-xl font-semibold mb-4">Customer Satisfaction</h5>
                    <p>
                    Customer satisfaction is our top priority. We go above and beyond to ensure that each customer has a positive and memorable experience with us, from the moment they browse our collection to the joy of receiving their chosen piece.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CoreValues
