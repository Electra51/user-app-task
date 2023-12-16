import toast from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import { TbSettings } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";
import { LuUserCircle } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineMenu } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectAuth } from "../../redux/authSlice";
import navLogo from "../../assets/logo/navlogo.png";
import avarter from "../../assets/logo/Avatar.png";

const Navbar = () => {
  const { token } = useAppSelector(selectAuth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //logout function
  const handleLogOut = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    navigate("/login");
  };

  //navbar menu
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
              <MdOutlineMenu className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-[8px] w-52 gap-[4px] bg-[#6941C6]"
            >
              {menus}
            </ul>
          </div>
          {/* navbar logo start*/}
          <Link to="/">
            <div className="flex justify-start items-center !gap-[11px] cursor-pointer">
              <img src={navLogo} alt="navlogo" height={40} />
              <h2 className="font-bold text-[20px]">Stack</h2>
            </div>
          </Link>
          {/* navbar logo end*/}
          <div className="hidden lg:flex lg:ml-10">
            <ul className="menu menu-horizontal px-1 gap-[4px]">{menus}</ul>
          </div>
        </div>

        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 gap-[28px]">
            <div className="text-[#D6BBFB] flex justify-center items-center gap-[26px]">
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
                    <img alt="Tailwind CSS Navbar component" src={avarter} />
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
