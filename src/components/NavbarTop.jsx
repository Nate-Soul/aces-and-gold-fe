import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "@/slices/usersApiSlice";
import { logout } from "@/slices/authSlice";

const NavbarTop = () => {

  const router = useRouter();

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const  [ logoutApiCall ]  = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav className="py-4 bg-main-700 text-white text-sm">
      <div className="container flex items-center justify-between">
        <ul className="flex gap-4 items-center">
            <li className="flex items-center gap-1">
                <Image src="/media/images/icons/en.jpg" width={25} height={25} alt="Language icon"/>
                <span className="bi bi-chevron-down"></span>
            </li>
            <li className="flex items-center gap-1">
                <span className="font-medium uppercase">USD</span>
                <span className="bi bi-chevron-down"></span>
            </li>
        </ul>
        <ul className="flex gap-6 items-center text-2xl">
            <li className="flex items-center gap-1">
              <span className="bi bi-calendar"></span>
            </li>
            <li className="flex items-center gap-1 relative">
              <Link href="/wishlist">
                <span className="bi bi-heart"></span>
              </Link>
              <span className="absolute top-0 -right-2 bg-secondary text-white text-xxs w-4 h-4 rounded-full inline-flex justify-center items-center">3</span>
            </li>
            <li className="flex items-center gap-1 relative">
              <Link href="/cart">
                <span className="bi bi-bag"></span>
              </Link>
              <span className="absolute top-1 -right-1 bg-secondary text-white text-xxs w-4 h-4 rounded-full inline-flex justify-center items-center">3</span>
            </li>
            {
              userInfo ? (
                <>
                <li className="flex items-center gap-1">
                  <Link href="/dashboard">
                    <span className="bi bi-person-circle"></span>
                  </Link>
                </li>
                <li className="flex items-center gap-1">
                  <span 
                    className="bi bi-box-arrow-in-right cursor-pointer"
                    onClick={logoutHandler} 
                  ></span>
                </li>
                </>
              ) : (
                <>
                  <li className="flex items-center gap-1">
                    <Link href="/register">
                      <span className="bi bi-box-arrow-up"></span>
                    </Link>
                  </li>
                  <li className="flex items-center gap-1">
                    <Link href="/login">
                      <span className="bi bi-box-arrow-down"></span>
                    </Link>
                  </li>
                </>
              )
            }
        </ul>
      </div>
    </nav>
  )
}

export default NavbarTop
