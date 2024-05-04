import { Link, Outlet } from "react-router-dom";
import { GrMultimedia } from "react-icons/gr";
import { PiTelevisionBold } from "react-icons/pi";
import { FiFilm } from "react-icons/fi";
import { LuBookmark } from "react-icons/lu";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { RxDashboard } from "react-icons/rx";
import { PiToggleRightFill } from "react-icons/pi";
import { PiToggleLeftFill } from "react-icons/pi";
import { useState } from "react";


export default function LayOutPage() {
  const [toggle, setToggle] = useState(false);

  function toggleFtn() {
    setToggle(!toggle);
  }

  return (
    <section>
      <div className="sidebar-height">
        <div
          className="fixed right-9 text-4xl text-rose-500 cursor-pointer z-10"
          onClick={toggleFtn}>
          {toggle ? <PiToggleRightFill /> : <PiToggleLeftFill />}
        </div>
        {toggle && (
          <Sidebar className="w-full">
            <Menu className="text-rose-500">
              <div className="py-6">
                <MenuItem className="py-2">
                  <GrMultimedia className="text-3xl " />
                </MenuItem>
              </div>
              <Link to="/">
                <MenuItem className="py-2">
                  <RxDashboard className="text-3xl" />
                </MenuItem>
              </Link>
              <Link to="/tv">
                <MenuItem className="py-2">
                  <PiTelevisionBold className="text-3xl" />
                </MenuItem>
              </Link>
              <MenuItem className="py-2">
                <FiFilm className="text-3xl" />
              </MenuItem>
              <Link to="/bookmarks">
                <MenuItem className="py-2">
                  <LuBookmark className="text-3xl" />
                </MenuItem>
              </Link>
            </Menu>
          </Sidebar>
        )}
        <main>
          <div>
            <div className="">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
