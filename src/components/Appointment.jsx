import Image from "next/image";
import Image1 from "../media/images/slider/carousel2.png";


const Appointment = () => {
  return (
    <section className="my-14">
        <div className="container flex items-center gap-0">
            <div className="flex flex-col gap-4 justify-self-stretch bg-gray-100 p-14 text-center">
                <h4 className="font-semibold text-2xl">Visit our stores</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eveniet architecto eos tempore incidunt. Fugit dolorum corporis iusto, dolor aut quas repellendus.
                </p>
                <button className="btn btn-outline-main w-full">Book an appointment</button>
            </div>
            <Image src={Image1} className="object-cover h-full w-full" alt="book an appointment illustration" priority/>
        </div>      
    </section>
  )
}

export default Appointment
