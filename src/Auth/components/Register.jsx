import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { handleError, handleSuccess } from "../../utils/handleStatus";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS
import axios from "axios";

export default function Register() {
  // State to toggle password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // State for Signup info
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    referCode: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  //Clear the form
  const clearForm = () => {
    setSignupInfo({
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      referCode: "",
    });
  };

  // Handle the signup form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { phone, email, password, confirmPassword, referCode } = signupInfo;

    // Validate all fields are filled
    if (!phone || !email || !password || !confirmPassword || !referCode) {
      return handleError("All fields are required");
    }
    // // Validate passwords match
    else if (password !== confirmPassword) {
      return handleError("Passwords do not match");
    }
    // Sending req to server for registration
    try {
      const signupForm = {
        email: email,
        phone: phone,
        password: password,
        referCode: referCode,
      };
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/register`,
        signupForm
      );
      clearForm();
      handleSuccess(response.data.message);
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        handleError(error.response.data.message);
        handleError(error.response.data);
        console.log(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        // The request was made but no response was received
        handleError("No response from server");
        console.log("No response from server");
      } else {
        // Something else happened while setting up the request
        handleError(error.message);
        console.log(error.message);
      }
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 min-h-screen pb-20">
        <div className="w-full bg-indigo-500 rounded-lg shadow sm:max-w-md">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Paisawala
              <br />
              Register a new account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {/* Email input */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                value={signupInfo.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border text-black border-gray-300 rounded-lg block w-full p-2.5"
                  placeholder="name@email.com"
                />
              </div>
              {/* Phone num input */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <input
                value={signupInfo.phone}
                  onChange={handleChange}
                  type="tel"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border text-black border-gray-300 rounded-lg block w-full p-2.5"
                  placeholder=" Your phone number"
                />
              </div>
              {/* password input */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                  value={signupInfo.password}
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
              {/* Confirm Password input */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                  value={signupInfo.confirmPassword}
                    onChange={handleChange}
                    type={passwordVisible ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
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
              {/* referral input */}
              <div>
                <label
                  htmlFor="refercode"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Refer code
                </label>
                <input
                value={signupInfo.referCode}
                  onChange={handleChange}
                  type="tel"
                  name="referCode"
                  id="referCode"
                  className="bg-gray-50 border text-black border-gray-300 rounded-lg block w-full p-2.5"
                  placeholder=" Refer code required"
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white rounded-lg text-md font-semibold px-5 py-2.5 text-center bg-green-500"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
