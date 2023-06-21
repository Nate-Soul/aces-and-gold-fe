import Link from "next/link";

const RegistrationForm = () => {
  return (
    <section className="py-14">
        <div className="container">
            <div className="flex">
                <div className="basis-1/2">
                    <h3 className="text-3xl font-semibold mb-8">Create an account</h3>
                    <form>
                        <div className="my-8">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" name="first_name" id="firstName" className="form-control"/>
                        </div>
                        <div className="my-5">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" name="last_name" id="lastName" className="form-control"/>
                        </div>
                        <div className="my-5">
                            <label htmlFor="emailAddress" className="form-label">Email Address</label>
                            <input type="email" name="email_address" id="emailAddress" className="form-control"/>
                        </div>
                        <div className="my-5">
                            <label htmlFor="passkey" className="form-label">Password</label>
                            <input type="password" name="password" id="passkey" className="form-control"/>
                        </div>
                        <div className="my-5">
                            <input type="checkbox" name="" id="remember" />
                            <label htmlFor="remember" className="ml-2">I accept the terms and conditions</label>
                        </div>
                        <div className="my-5">
                            <button className="btn btn-main w-1/2">Register</button>
                        </div>
                        <div className="my-5 text-center">
                            <p>Already have an account? <Link href="/login" className="text-main-500 hover:text-main hover:line-through">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RegistrationForm
