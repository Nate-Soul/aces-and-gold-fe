import Image from "next/image";
import Image1 from "../media/images/slider/carousel2.png";


const Appointment = () => {
  return (
    <section className="my-14 bg-gray-200">
        <div className="container flex items-center gap-0">
            <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-2xl">Visit our stores</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eveniet architecto eos tempore incidunt. Fugit dolorum corporis iusto, dolor aut quas repellendus.
                </p>
                <button className="py-2 px-10 rounded-3xl border border-main w-max text-main">Book an appointment</button>
            </div>
            <Image src={Image1} className="object-cover h-full w-full" priority/>
        </div>      
    </section>
  )
}

export default Appointment
