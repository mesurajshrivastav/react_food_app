import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import useStatusOnline from "../utils/useStatusOnline";
import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useStatusOnline();

  const [btnName, setBtnName] = useState("Login");

  const data = useContext(UserContext);
  const { loggedInUser } = data;

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-gray-50 shadow-lg m-2 rounded-2xl h-20 z-10  sticky top-0">
      <div className="logo-container">
        <img
          className="w-20 rounded-2xl"
          src={LOGO_URL}
          alt="BigCo Inc. logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-orange-500 font-bold">
            Welcome {loggedInUser}{" "}
          </li>
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 hover:underline hover:font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:underline hover:font-semibold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:underline hover:font-semibold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold  hover:underline hover:font-extrabold">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          <li className="px-4 hover:underline hover:font-semibold">
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>
        <div>
          <button
            className="px-4 py-2 mr-4 bg-orange-600 rounded-lg text-white font-bold hover:underline"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
