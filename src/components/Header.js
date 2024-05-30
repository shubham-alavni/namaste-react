import { APP_LOGO } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { default_logged_in_user } = useContext(UserContext);

  // subscribe to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-50 lg:bg-blue-50">
      <div className="logo-container">
        <img className="w-56" src={APP_LOGO} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <li className="px-4">
            <button
              className="login-btn"
              onClick={() => {
                if (loginBtn === "Login") {
                  setLoginBtn("Logout");
                } else {
                  setLoginBtn("Login");
                }
              }}
            >
              {loginBtn}
            </button>
          </li>
          <li className="font-bold">{default_logged_in_user}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
