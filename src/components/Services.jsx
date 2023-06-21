import SectionHeading from "./SectionHeading";
const Services = () => {

    const servicesList = [
        {
            id: 1,
            title: "Jewelry & Watch Sales",
            description: "We sale high-grade jewelry and watches. Browse through a wide variety of products, from diamond-studded necklaces to Swiss-made watches."
        },
        {
            id: 2,
            title: "Customization",
            description: "We offer customization services, you can request personalized engravings or choose from a range of customizable features to make your jewelry or watch unique."
        },
        {
            id: 3,
            title: "Repair and maintenance",
            description: "We also offer repair and maintenance services for watches and jewelry. You can be rest assured that your precious items are in good hands with our skilled technicians."
        },
    ]

  return (
    <section className="py-14">
        <div className="container">
            <SectionHeading title="Our Services" column={true}/>
            <div className="grid grid-cols-3 gap-8">
                {servicesList && servicesList.map((service, i) => (
                    <div className="p-5 shadow text-center rounded-xl" key={i}>
                        <h6 className="font-semibold uppercase mb-4">{service.title}</h6>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services
