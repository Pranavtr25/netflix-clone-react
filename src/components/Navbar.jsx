import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 w-full absolute z-[100]">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold">NETFLIX</h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white px-4 py-2">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white rounded px-4 py-2"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white px-4 py-2">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 text-white rounded px-4 py-2">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
