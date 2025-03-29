import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Navbar */}
      <nav className="w-full bg-blue-600 py-4 px-8 text-white text-xl font-bold">
        Teach For India
      </nav>

      {/* Login Card */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full mt-6">
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-gray-700 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>

        {/* Demo Accounts */}
        <div className="bg-gray-100 p-4 rounded-lg mt-4 text-gray-700 text-sm">
          <p className="font-semibold">Demo Accounts:</p>
          <p>Volunteer: volunteer@example.com / password</p>
          <p>Coordinator: coordinator@example.com / password</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
