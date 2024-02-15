import { useSelector } from "react-redux";

const checkAuth = () => {

    const { userInfo } = useSelector((state) => state.auth);

  return userInfo ? true : false;
}

export default checkAuth;
