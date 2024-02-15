import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials, logout } from "@/slices/authSlice";
import { useUpdateMutation, useDeleteMutation, useLogoutMutation } from "@/slices/usersApiSlice";
import { toast } from "react-toastify";

const ProfileForm = () => {

    const dispatch = useDispatch();
    const router   = useRouter();

    const [update, {isLoading}] = useUpdateMutation();
    const [ deleteUser ]        = useDeleteMutation();
    const [ logoutApiCall ]     = useLogoutMutation();

    const { userInfo } = useSelector((state) => state.auth);

    const [userId, setUserId]                     = useState("");
    const [firstName, setFirstName]               = useState("");
    const [lastName, setLastName]                 = useState("");
    const [emailAddress, setEmailAddress]         = useState("");
    const [password, setPassword]                 = useState("");
    const [confirmPassword, setConfirmPassword]   = useState("");

    useEffect(() => {
        if(userInfo){
            setUserId(userInfo._id);
            setFirstName(userInfo.first_name);
            setLastName(userInfo.last_name);
            setEmailAddress(userInfo.email);
        }
    }, [userInfo]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
        } else {
            try {
                const res = await update({
                    _id: userId,
                    first_name: firstName,
                    last_name: lastName,
                    email: emailAddress,
                    password
                }).unwrap();
                dispatch(setCredentials({...res}));
                toast.success("Profile updated");
            } catch(err) {
                toast.error(err?.data?.message || err?.error);
            }
        }
    };

    const handleDelete = async () => {
        try { 
            await deleteUser({ _id: userId }).unwrap();
            toast.success("Your profile has been deleted");
            await logoutApiCall().unwrap();
            dispatch(logout());
        } catch (err) {
            toast.error(err?.data?.message || err?.error);
        }
    }

  return (
    <section className="py-14">
        <div className="container flex justify-center">
            <div className="basis-1/2 shadow-sm p-8">
                <p>
                   Return to <Link href="/">Home</Link>
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="my-5">
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
                        Confirm Password
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
                        <button type="submit" className="btn btn-main w-1/2">
                            {isLoading ? "Updating your info..." : "Update Profile"}
                        </button>
                        <button onClick={handleDelete} className="btn btn-sec w-1/2">
                            {isLoading ? "Deleting your info..." : "Delete Profile"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ProfileForm
