import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/slices/authSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRegisterMutation } from "@/slices/usersApiSlice";
import { toast } from "react-toastify";

const RegistrationForm = () => {

  const [firstName, setFirstName]               = useState("");
  const [lastName, setLastName]                 = useState("");
  const [emailAddress, setEmailAddress]         = useState("");
  const [password, setPassword]                 = useState("");
  const [confirmPassword, setConfirmPassword]   = useState("");
  const [accept, setAccept]                     = useState(false);

  const router   = useRouter();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [
        register, 
        {isLoading}
    ] = useRegisterMutation();

    useEffect(() => {
        if (userInfo) {
            router.push("/dashboard");
        }
    }, [userInfo, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!accept){
        toast.error("You must accept our terms & conditions to continue");
    } else if(password !== confirmPassword){
        toast.error("Passwords do not match");
    } else {
        try {
            const res = await register({ 
                first_name: firstName, 
                last_name: lastName, 
                email: emailAddress, 
                password 
            }).unwrap();
            dispatch(setCredentials({...res}));
            toast.success("Your account has been created successfully");
            router.push("/");
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }
  };

  return (
    <section className="py-14">
      <div className="container">
        <div className="flex">
          <div className="basis-1/2">
            <h3 className="text-3xl font-semibold mb-8">Create an account</h3>
            <form onSubmit={handleSubmit}>
              <div className="my-8">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="firstName"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="my-5">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="lastName"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="my-5">
                <label htmlFor="emailAddress" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email_address"
                  id="emailAddress"
                  className="form-control"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </div>
              <div className="my-5">
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
              <div className="my-5">
                <label htmlFor="confirmPassword" className="form-label">
                  ConfirmPassword
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  id="confirmPassword"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="my-5">
                <input
                  type="checkbox"
                  name="accept"
                  id="accept"
                  onChange={(e) => setAccept((prev) => !prev)}
                />
                <label htmlFor="accept" className="ml-2">
                  I accept the terms and conditions
                </label>
              </div>
              <div className="my-5">
                <button type="submit" className="btn btn-main w-1/2">
                    {isLoading ? "Creating your account..." : "Create Account"}
                </button>
              </div>
              <div className="my-5 text-center">
                <p>
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-main-500 hover:text-main hover:line-through"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
