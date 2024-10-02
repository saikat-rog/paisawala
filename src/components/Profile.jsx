import React from "react";
import { useDispatch } from "react-redux";
import { logout } from '../store/authSlice';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import {
  CalendarIcon,
  NumberedListIcon,
  GiftIcon,
  WalletIcon,
  BanknotesIcon,
  BuildingOfficeIcon,
  ArrowDownIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  ArrowLeftCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Profile() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const phone = Cookies.get('phone');

  // onLogout
  const onLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate("/login");
  }

  return (
    <div className="min-w-screen mb-52">
      {/* User info */}
      <div className="w-full h-1/7 flex flex-col text-lg bg-indigo-500 text-white p-5 gap-5">
        {/* User Id and Phone */}
        <div className="flex flex-col gap-2">
          <p>User: {phone}</p>
          <p>ID:254789</p>
        </div>
        {/* Balance and Interest Dashboard */}
        <div className="flex flex-row justify-between ">
          <div className="w-1/2 flex items-center flex-col gap-2">
            <p>Balance</p>
            <p>Rs. 4582.36</p>
            <button className=" bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Recharge
            </button>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <p>Interest</p>
            <p>Rs. 158836.36</p>
          </div>
        </div>
      </div>
      {/* Profile options */}
      <div>
        <ul className="flex gap-6 flex-col p-5">
          <li className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              Sign in
            </div>
            <ChevronDownIcon className="w-5 h-5" />
          </li>
          <li className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <NumberedListIcon className="w-5 h-5" />
              Orders
            </div>
            <ChevronDownIcon className="w-5 h-5" />
          </li>
          <li className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <GiftIcon className="w-5 h-5" />
              Promotion
            </div>
            <ChevronDownIcon className="w-5 h-5" />
          </li>
          <li className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <WalletIcon className="w-5 h-5" />
              Wallet
            </div>
            <ChevronDownIcon className="w-5 h-5" />
          </li>
          <li className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <BanknotesIcon className="w-5 h-5" />
              Bank Card
            </div>
            <ChevronDownIcon className="w-5 h-5" />
          </li>
          <li className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <BuildingOfficeIcon className="w-5 h-5" />
              Addresses
            </div>
            <ChevronDownIcon className="w-5 h-5" />
          </li>
          <li className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <ArrowDownIcon className="w-5 h-5" />
              App Download
            </div>
            <ChevronDownIcon className="w-5 h-5" />
          </li>
          <li className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <DocumentTextIcon className="w-5 h-5" />
              Compliants Management
            </div>
            <ChevronDownIcon className="w-5 h-5" />
          </li>
          <li className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <InformationCircleIcon className="w-5 h-5" />
              About
            </div>
            <ChevronDownIcon className="w-5 h-5" />
          </li>
          <li className="flex justify-start gap-2">
            <button className="bg-red-600 p-2 rounded-md text-white flex gap-2" onClick={onLogout}>
              <ArrowLeftCircleIcon className="w-5 h-5" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
