import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    role: "Volunteer",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up with", formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Navbar */}
      <nav className="w-full bg-blue-600 py-4 px-8 text-white text-xl font-bold">
        Teach For India
      </nav>

      {/* Signup Card */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full mt-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="w-full px-3 py-2 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="w-full px-3 py-2 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
              placeholder="9876543210"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
              placeholder="******"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Role</label>
            <select
              name="role"
              className="w-full px-3 py-2 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="Volunteer">Volunteer</option>
              <option value="Coordinator">Coordinator</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-700 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
