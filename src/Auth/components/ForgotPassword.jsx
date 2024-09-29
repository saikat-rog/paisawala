import React from 'react'

export default function ForgotPassword () {
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 min-h-screen pb-20">
        <div className="w-full bg-indigo-500 rounded-lg shadow sm:max-w-md">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Paisawala<br/>
              Reset your password
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
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white rounded-lg text-md font-semibold px-5 py-2.5 text-center bg-green-500"
              >
                Send OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
