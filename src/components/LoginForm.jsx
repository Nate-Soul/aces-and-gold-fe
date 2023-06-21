import Link from "next/link";

const LoginForm = () => {
  return (
    <section className="py-14">
      <div className="container">
        <div className="flex">
            <div className="basis-1/2">
                <h3 className="font-semibold text-3xl mb-8">Login</h3>
                <form>
                    <div className="my-8">
                        <label htmlFor="emailAddress" className="form-label">Email Address</label>
                        <input type="email" name="email_address" id="emailAddress" className="form-control"/>
                    </div>
                    <div className="my-8">
                        <label htmlFor="passkey" className="form-label">Password</label>
                        <input type="password" name="password" id="passkey" className="form-control"/>
                    </div>
                    <div className="my-8 flex justify-between items-center">
                        <div className="input-group">
                            <input type="checkbox" name="" id="remember" />
                            <label htmlFor="remember" className="ml-2">Keep Me Logged In</label>
                        </div>
                        <Link href="/register" className="text-main-500 hover:text-main hover:line-through">Forgotten Password?</Link>
                    </div>
                    <div className="my-8 flex justify-between items-center">
                        <button className="btn btn-main w-1/2">Login</button>
                        <Link href="/register" className="text-main-500 hover:text-main hover:line-through">Create an account</Link>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default LoginForm
