import SectionHeading from "../subcomponents/SectionHeading";


const MissionVision = () => {
  return (
    <section className="py-14">
        <div className="container">
            <SectionHeading title="Mission/Values" column={true}/>
            <div className="grid grid-cols-2 gap-8">
                <div className="bg-gray-200 text-center p-5">
                    <h5 className="text-xl font-semibold mb-4">Our Mission</h5>
                    <p>
                    Our mission at Aces and Gold is to bring joy and sophistication to our customers' lives by offering exquisite jewelry and watches that celebrate their unique style and enhance their special moments. We are dedicated to delivering exceptional craftsmanship, unparalleled quality, and personalized service, ensuring that every interaction with our brand is a memorable experience.
                    </p>
                </div>
                <div className="bg-gray-200 text-center p-5">
                    <h5 className="text-xl font-semibold mb-4">Our Vision</h5>
                    <p>
                    Our vision at Aces and Gold is to become the go-to destination for discerning individuals who seek extraordinary jewelry and watches that embody elegance, prestige, and timeless beauty. We aim to build long-lasting relationships with our customers, earning their trust and loyalty through our commitment to excellence and our ability to consistently exceed their expectations.
                    </p>
                </div>
                </div>
            </div>
    </section>
  )
}

export default MissionVision
