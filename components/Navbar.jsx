import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router";
import { removeUser } from "../src/utils/userSlice";

const Navbar = () => {
  const dispatch= useDispatch()
  const navigate = useNavigate();

  const handleLogout =async( )=>{
    try {
      await axios.post("http://localhost:3000/logout",{},{withCredentials:true})
      dispatch(removeUser())
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }
  const user = useSelector((state)=>state.user)
  return (
    <div className="navbar bg-base-100 shadow-sm rounded-full px-6">
      <div className="flex-1 ">
        <a className="font-bold rounded-full text-2xl text-gray-900">
           Streamify
        </a>
      </div>
      <div className="flex gap-2">
       
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
           { user &&  <img
                alt="Tailwind CSS Navbar component"
                src="https://xsgames.co/randomusers/assets/avatars/male/78.jpg"
              />}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
