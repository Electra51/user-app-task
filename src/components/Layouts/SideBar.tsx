import React, { useState } from "react";
import {
  MdOutlineArrowBack,
  MdOutlineDashboard,
  MdOutlineMenu,
} from "react-icons/md";
import navLogo from "../../assets/logo/navlogo.png";
import { LuUserCircle } from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
const SideBar = () => {
  const [open, setOpen] = useState(true);
  const SidebarMenus = [
    { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    { name: "Profile", link: "/profile", icon: LuUserCircle },
    { name: "Logout", link: "/logout", icon: IoMdLogOut, margin: true },
    {
      name: "Back Home",
      link: "/",
      icon: MdOutlineArrowBack,
    },
  ];

  return (
    <div
      className={`bg-[#6941C6] min-h-screen ${
        open ? "w-[15rem]" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      {open ? (
        <div className="flex justify-between items-center">
          <Link to="/">
            <div className="flex justify-start items-center !gap-[11px] cursor-pointer">
              <img src={navLogo} alt="navlogo" height={30} width={30} />
              <h2 className="font-bold text-[18px]">Stack</h2>
            </div>
          </Link>
          <div className="py-3">
            <MdOutlineMenu
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      ) : (
        <div className="py-3 flex justify-end">
          <MdOutlineMenu
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
      )}

      <div className="mt-4 flex flex-col gap-1 relative">
        {SidebarMenus?.map((menu, i) => (
          <NavLink
            to={menu?.link}
            key={i}
            className={` ${
              menu?.margin && "mt-5"
            } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-[#7F56D9] rounded-md`}
          >
            <div className="ml-[-3px]">
              {React.createElement(menu?.icon, { size: "20" })}
            </div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 tracking-[0.5px] ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
            >
              {menu?.name}
            </h2>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
