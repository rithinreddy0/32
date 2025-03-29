import React, { useState } from "react";
import { FaHome, FaTasks, FaBell, FaUser } from "react-icons/fa";

const Dashboard = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold">Volunteer Dashboard</h2>
    <div className="grid grid-cols-2 gap-4 mt-6">
      <div className="p-4 border rounded-lg shadow bg-white">
        <h3 className="text-sm text-gray-500">Assigned School</h3>
        <p className="font-semibold">🏫 Delhi Public School</p>
      </div>
      <div className="p-4 border rounded-lg shadow bg-white">
        <h3 className="text-sm text-gray-500">Tasks Completed</h3>
        <p className="font-semibold">1/3</p>
        <progress className="w-full" value="1" max="3"></progress>
      </div>
      <div className="p-4 border rounded-lg shadow bg-white">
        <h3 className="text-sm text-gray-500">Next Task Due</h3>
        <p className="font-semibold">📅 April 15, 2023</p>
      </div>
    </div>
  </div>
);

const MyTasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Prepare teaching materials", status: "In Progress" },
    { id: 2, text: "Review student assignments", status: "Pending" },
    { id: 3, text: "Submit monthly report", status: "Completed" }
  ]);

  const toggleTaskStatus = (id) => {
    const confirmChange = window.confirm("Are you sure you want to mark this task as completed?");
    if (confirmChange) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id
            ? { ...task, status: task.status === "Completed" ? "Pending" : "Completed" }
            : task
        )
      );
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">My Tasks</h2>
      <div className="mt-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center gap-4 mt-2 p-2 border rounded-lg shadow bg-white">
            <input
              type="checkbox"
              checked={task.status === "Completed"}
              onChange={() => toggleTaskStatus(task.id)}
              className="w-5 h-5"
            />
            <p className={`font-semibold ${task.status === "Completed" ? "line-through text-gray-500" : ""}`}>📖 {task.text}</p>
            <span className={`px-2 py-1 text-xs rounded ${task.status === "Completed" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}`}>
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Announcements = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold">Recent Announcements</h2>
    <p className="mt-2">📢 New Teaching Materials Available</p>
  </div>
);

const Profile = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold">Profile</h2>
    <p className="mt-2">👤 John Doe</p>
  </div>
);

const VolunteerDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-blue-700 text-white h-full p-6">
        <h1 className="text-xl font-bold mb-6">Teach For India</h1>
        <ul>
          {[{ name: "Dashboard", icon: <FaHome /> }, { name: "My Tasks", icon: <FaTasks /> }, { name: "Announcements", icon: <FaBell /> }, { name: "Profile", icon: <FaUser /> }].map((tab) => (
            <li
              key={tab.name}
              className={`p-3 cursor-pointer rounded mb-2 flex items-center gap-2 ${
                activeTab === tab.name ? "bg-white text-blue-700" : "hover:bg-blue-600"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.icon} {tab.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-6">
        {activeTab === "Dashboard" ? <Dashboard /> : activeTab === "My Tasks" ? <MyTasks /> : activeTab === "Announcements" ? <Announcements /> : <Profile />}
      </div>
    </div>
  );
};

export default VolunteerDashboard;
