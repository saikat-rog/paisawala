import React from "react";
import { HomeIcon, TrophyIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <nav className="min-w-screen">
      <div className="flex flex-row gap-5 justify-between fixed bottom-0 left-0 right-0 p-2 bg-white shadow-[0_-3px_14px_2px_rgba(0,0,0,0.12)]">
        <Link to={"/"} className="flex flex-col items-center gap-2 w-1/4">
          <HomeIcon className="w-6 h-6" />
          Home
        </Link>

        {isLoggedIn && (
          <Link to={"/play"} className="flex flex-col items-center gap-2 w-1/4">
            <TrophyIcon className="w-6 h-6" />
            Win
          </Link>
        )}

        <Link
          to={isLoggedIn ? "/profile" : "/login"}
          className="flex flex-col items-center gap-2 w-1/4"
        >
          <UserIcon className="w-6 h-6" />
          Profile
        </Link>

      </div>
    </nav>
  );
}
