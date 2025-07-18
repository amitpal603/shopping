import React from 'react';

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-cyan-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Login</h2>

        <form className="space-y-5">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Extra Options */}
        <div className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-purple-600 hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
