import Image from "next/image";
import Link from "next/link";


const Appointment = () => {
  return (
    <section className="my-14">
        <div className="container grid grid-cols-2 gap-0 rounded-3xl">
          <div className="h-full w-full bg-gray-100 flex flex-col gap-4 items-center justify-center p-5 text-center">
            <h4 className="capitalize text-2xl font-semibold">Visit Our Stores</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic pariatur culpa assumenda, saepe vero consequatur aliquid minima est laudantium sunt!
            </p>
            <Link href="/contact" className="btn btn-outline-main w-1/2">Book an appointment</Link>
          </div>
          <Image 
            src="/media/images/gallery/1.jpg" 
            width={1024}
            height={1024}
            className="object-cover h-full w-full" 
            alt="customer booking an appointment" 
            priority
          />
        </div>      
    </section>
  )
}

export default Appointment
