import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { TbSettings } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import navLogo from "../../assets/logo/navlogo.png";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectAuth } from "../../redux/authSlice";
import toast from "react-hot-toast";
import { LuUserCircle } from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";
const Navbar = () => {
  const { token } = useAppSelector(selectAuth);
  console.log(token);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    navigate("/login");
  };
  const menus = (
    <>
      <li className="tracking-[0.5px] !rounded-[6px] font-medium text-[16px]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="tracking-[0.5px] !rounded-[6px] font-medium text-[16px]">
        <NavLink to="/users">Users</NavLink>
      </li>
      <li className="tracking-[0.5px] !rounded-[6px] font-medium text-[16px]">
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li className="tracking-[0.5px] !rounded-[6px] font-medium text-[16px]">
        <NavLink to="/tasks">Tasks</NavLink>
      </li>
      <li className="tracking-[0.5px] !rounded-[6px] font-medium text-[16px]">
        <NavLink to="/report">Reporting</NavLink>
      </li>
      {token ? (
        <li className="tracking-[0.5px] !rounded-[6px] font-medium text-[16px]">
          <NavLink to="/dashboard">DashBoard</NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className=" bg-[#6941C6] text-white max-w-[1440px] mx-auto max-h-[72px]">
      <nav className="navbar max-w-[1280px] mx-auto">
        <div className="navbar-start gap-[24px]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-[4px]"
            >
              {menus}
            </ul>
          </div>
          <Link to="/">
            <div className="flex justify-start items-center !gap-[11px] cursor-pointer">
              <img src={navLogo} alt="navlogo" height={40} />
              <h2 className="font-bold text-[20px]">Stack</h2>
            </div>
          </Link>
          <div className="hidden lg:flex lg:ml-10">
            <ul className="menu menu-horizontal px-1 gap-[4px]">{menus}</ul>
          </div>
        </div>

        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 gap-[28px]">
            <div className="text-[#D6BBFB] flex justify-center items-center gap-[26px]">
              {" "}
              <FiSearch className="text-xl" />
              <TbSettings className="text-xl" />
              <IoNotificationsOutline className="text-xl font-bold" />
            </div>

            {token ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#6941C6] rounded-[8px] w-52"
                >
                  <li className="tracking-[0.5px] !rounded-[6px] font-medium text-[16px]">
                    <NavLink to="/profile" className="justify-start">
                      <LuUserCircle className="text-xl" />
                      Profile
                    </NavLink>
                  </li>

                  <li className="tracking-[0.5px] !rounded-[6px] font-medium text-[16px] mt-3">
                    <div onClick={() => handleLogOut()} className="">
                      <IoMdLogOut className="text-xl" />
                      Logout
                    </div>
                  </li>
                </ul>
              </div>
            ) : (
              <li className="!rounded-[6px] bg-white text-[#6941C6] text-[16px] font-medium">
                <NavLink to="/login">
                  <AiOutlineUser className="text-[16px] font-bold" />
                  Login / Register
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
