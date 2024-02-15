

const ContactUs = () => {
  return (
    <section className="py-14">
      <div className="container">
        <div className="grid grid-cols-3 gap-8">
            <div className="col-span-1">
                <h3 className="font-bold text-2xl mb-8 capitalize">Reach Us</h3>
                <div className="flex gap-5 mb-5 shadow p-5 rounded-xl">
                    <span className="bi bi-geo text-2xl"></span>
                    <div>
                        <h6 className="font-semibold mb-4">Address:</h6>
                        <address>
                            No 38 Browser and Temple Street.
                        </address>
                    </div>
                </div>
                <div className="flex gap-5 mb-5 shadow p-5 rounded-xl">
                    <span className="bi bi-phone text-2xl"></span>
                    <div>
                        <h6 className="font-semibold mb-4">Telephone:</h6>
                        <ul>
                            <li>
                                <a href="tel:+2347086752038">+234 708 675 2038</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-5 mb-5 shadow p-5 rounded-xl">
                    <span className="bi bi-envelope text-2xl"></span>
                    <div>
                        <h6 className="font-semibold mb-4">Email:</h6>
                        <ul>
                            <li>
                                <a href="mailto:nanithsukpong@gmail.com">support@acesandgold.shop</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <h3 className="font-bold text-2xl mb-8 capitalize">Send Us Your Query Anytime!</h3>
                <form action="#">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="col-span-1">
                            <label htmlFor="firstName" className="form-label">Your First Name</label>
                            <input type="text" name="first_name" id="firstName" className="form-control"/>
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="lastName" className="form-label">Your Last Name</label>
                            <input type="text" name="last_name" id="lastName" className="form-control"/>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="emailAddress" className="form-label">Your Email Address</label>
                            <input type="text" name="email_address" id="emailAddress" className="form-control"/>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="mailSubject" className="form-label">Subject</label>
                            <input type="email" name="mail_subject" id="mailSubject" className="form-control"/>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea name="message" id="message" className="form-control" rows={7}></textarea>
                        </div>
                        <div className="col-span-full">
                            <button className="btn btn-main">
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
