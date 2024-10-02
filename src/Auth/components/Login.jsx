import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleError, handleSuccess } from "../../utils/handleStatus";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to toggle password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // State for Login info
  const [loginInfo, setLoginInfo] = useState({
    phone: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
    console.log(loginInfo);
  };

  // Handling login button
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { phone, password } = loginInfo;

    // If any field is empty show this message
    if (!phone || !password) {
      return handleError("All fields are required");
    }
    
    // Sending req to server for Login
    try{
      const respone = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, loginInfo);
      handleSuccess(respone.data.message);
      const { token } = respone.data;
      const { phone } = respone.data;
      Cookies.set('phone', phone, { expires: 365 });
      dispatch(login(token));
      navigate("/play");
    }
    catch(e){
      if(e.response){
        return handleError(e.response.data.message);
      }
      else if(e.request){
        return handleError("No response from server");
      }
      else{
        return handleError("Internal Error:", e.message);
      }
    }

  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 min-h-screen pb-20">
        <h1 className="p-10 text-2xl">Login to Paisawala</h1>
        <div className="w-full bg-indigo-500 rounded-lg shadow sm:max-w-md">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Paisawala
              <br />
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <input
                value={loginInfo.phone}
                  onChange={handleChange}
                  type="tel"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border text-black border-gray-300 rounded-lg block w-full p-2.5"
                  placeholder=" Your phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                  value={loginInfo.password}
                  onChange={handleChange}
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border text-black border-gray-300 rounded-lg block w-full p-2.5"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
                  >
                    {passwordVisible ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Link
                  to={"/reset-password"}
                  className="text-sm font-medium text-white hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white rounded-lg text-md font-semibold px-5 py-2.5 text-center bg-green-500"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-white">
                Don&apos;t have an account yet?{" "}
                <Link
                  to={"/register"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </section>
  );
}
