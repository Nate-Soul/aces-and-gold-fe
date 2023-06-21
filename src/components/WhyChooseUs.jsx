import SectionHeading from "./SectionHeading";

const WhyChooseUs = () => {

  const statements = [
    {
      id: 1,
      title: "Exceptional Craftsmanship",
      description: "We curate a collection of jewelry and watches crafted by skilled artisans who pay meticulous attention to detail, ensuring each piece is a work of art."
    },
    {
      id: 2,
      title: "Diverse Selection",
      description: "Whether you're seeking timeless classics or contemporary designs, our extensive range of jewelry and watches offers something for every style and occasion."
    },
    {
      id: 3,
      title: "Uncompromising Quality",
      description: "We source only the finest materials, including precious metals, gemstones, and premium watch movements, to guarantee the highest standards of quality and durability."
    },
    {
      id: 4,
      title: "Personalized Service",
      description: "Our dedicated team of experts is committed to providing personalized assistance, helping you find the perfect piece that reflects your individuality and captures your heart."
    },
    {
      id: 5,
      title: "Secure and Convenient Shopping",
      description: "With our secure online platform, you can shop with confidence, knowing that your information is protected. We also offer convenient shipping options to bring your treasures right to your doorstep."
    },
  ]


  return (
    <section className="py-14">
      <div className="container">
        <SectionHeading title="Why Choose Us?" description="At Aces and Gold, we strive to be your premier destination for exquisite jewelry and luxurious watches. We believe in providing our customers with an unparalleled shopping experience and a selection that radiates elegance and quality. Here's why you should choose us:" column={true}/>
        <div className="grid grid-cols-3 gap-8 justify-center">
          {statements?.map((statement, index) => ( 
          <div className="shadow bg-light text-center p-5 rounded-lg" key={index}>
            <h5 className="font-semibold text-xl text-main mb-4 text-capitalize">{statement.title}</h5>
            <p>{statement.description}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
