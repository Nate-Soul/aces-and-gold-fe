

const EmailSub = () => {
  return (
    <section className="py-8 bg-main text-white">
      <div className="container grid grid-cols-2 gap-10 items-center">
        <div className="col-span-1 flex flex-col gap-3 text-center">
            <h4 className="capitalize text-2xl font-semibold">
              Get the first dibs on jaw-dropping deals! 
            </h4>
            <p>
              Sign up for our newsletter and receive exclusive jewelry tips, styling advice, flash sales, promotions, special offers and secret discounts on our stunning jewelry pieces straight to your inbox.
            </p>
        </div>
        <form className="col-span-1">
            <div className="flex">
                <input type="email" placeholder="Enter Your Email Address" className="py-2 px-3 outline-none border border-secondary bg-transparent rounded-s-3xl w-3/4" />
                <button className="w-1/4 py-2 bg-secondary text-main rounded-e-3xl">
                    Subscribe <span className="bi bi-arrow-right"></span>
                </button>
            </div>
        </form>
      </div>
    </section>
  )
}

export default EmailSub
