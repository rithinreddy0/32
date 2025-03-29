import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold">Teach For India</h1>
        <div>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg mx-2" onClick={()=>navigate("/login")}>
            Login
          </button>
          <button onClick={()=>navigate("/signup")  } className="bg-white text-blue-600 px-4 py-2 rounded-lg">
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Volunteer Management Platform</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Join our mission to provide excellent education to all children.
          Manage your volunteer work efficiently with our platform.
        </p>
        <div className="mt-6">
          <button onClick={()=>navigate("/signup")} className="bg-white text-blue-600 px-6 py-2 rounded-lg mx-2">
            Become a Volunteer
          </button>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg mx-2">
            Learn More
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-bold">How It Works</h2>
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <div className="bg-white shadow-lg rounded-lg p-6 w-80">
            <div className="text-4xl text-blue-600 mb-4">🔗</div>
            <h3 className="text-lg font-semibold">Register</h3>
            <p className="text-gray-600">
              Sign up as a volunteer or coordinator to get started with our
              platform.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 w-80">
            <div className="text-4xl text-blue-600 mb-4">📋</div>
            <h3 className="text-lg font-semibold">Manage Tasks</h3>
            <p className="text-gray-600">
              Coordinators assign tasks to volunteers who can track and update
              their progress.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 w-80">
            <div className="text-4xl text-blue-600 mb-4">💬</div>
            <h3 className="text-lg font-semibold">Communicate</h3>
            <p className="text-gray-600">
              Stay updated with announcements and communicate with your team
              members.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100 text-gray-600">
        © 2025 Teach For India. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
