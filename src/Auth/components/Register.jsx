import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"; // Make sure you have heroicons installed

export default function Register() {
  // State to toggle password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 min-h-screen pb-20">
        <div className="w-full bg-indigo-500 rounded-lg shadow sm:max-w-md">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Paisawala<br/>
              Register a new account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
                {/* Email input */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border text-black border-gray-300 rounded-lg block w-full p-2.5"
                  placeholder="name@email.com"
                  required
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
                  type="tel"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border text-black border-gray-300 rounded-lg block w-full p-2.5"
                  placeholder=" Your phone number"
                  required
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
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border text-black border-gray-300 rounded-lg block w-full p-2.5"
                    required
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
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border text-black border-gray-300 rounded-lg block w-full p-2.5"
                    required
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
                  type="tel"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border text-black border-gray-300 rounded-lg block w-full p-2.5"
                  placeholder=" Refer code required"
                  required
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
    </section>
  );
}
