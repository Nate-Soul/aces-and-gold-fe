import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter} from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "@/slices/usersApiSlice";
import { setCredentials } from "@/slices/authSlice";
import { toast } from "react-toastify";

const LoginForm = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  const [login, {isLoading}] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if(userInfo) {
      router.push("/dashboard/profile");
    }
  }, [router, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({...res}));
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };


  return (
    <section className="py-14">
      <div className="container">
        <div className="flex">
          <div className="basis-1/2">
            <h3 className="font-semibold text-3xl mb-8">Login</h3>
            <form onSubmit={submitHandler}>
              <div className="my-8">
                <label htmlFor="emailAddress" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email_address"
                  id="emailAddress"
                  className="form-control"
                  value={email}
                  onChange={ (e) => setEmail(e.target.value) }
                />
              </div>
              <div className="my-8">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="my-8 flex justify-between items-center">
                <div className="input-group">
                  <input 
                    type="checkbox" 
                    name="remember" 
                    id="remember"
                  />
                  <label 
                    htmlFor="remember" 
                    className="ml-2"
                  >
                    Keep Me Logged In
                  </label>
                </div>
                <Link
                  href="/register"
                  className="text-main-500 hover:text-main hover:line-through"
                >
                  Forgotten Password?
                </Link>
              </div>
              <div className="my-8 flex justify-between items-center">
                <button 
                  type="submit" 
                  className="btn btn-main w-1/2"
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>
                <Link
                  href="/register"
                  className="text-main-500 hover:text-main hover:line-through"
                >
                  Create an account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
