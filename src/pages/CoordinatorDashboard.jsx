import { useState } from "react";
import { Bell, Home, List, MessageSquare, Users, PlusCircle, Send } from "lucide-react";
import { Bar } from "recharts";

export function Card({ children }) {
  return <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}

export function Progress({ value }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-blue-600 h-4 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}

export default function CoordinatorDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [message, setMessage] = useState("");

  const volunteers = ["Priya Sharma", "Rohan Mehta", "Anjali Verma", "Rahul Gupta", "Sneha Kapoor"];

  const handleSendMessage = () => {
    if (selectedVolunteer && message) {
      alert(`Message sent to ${selectedVolunteer}: ${message}`);
      setMessage("");
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <div className="grid grid-cols-3 gap-6 mt-6">
            <Card>
              <CardContent>
                <h3 className="text-gray-500 text-lg">Total Volunteers</h3>
                <p className="text-3xl font-semibold">24 <span className="text-gray-400 text-sm">(20 active)</span></p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-gray-500 text-lg">Tasks Completed</h3>
                <p className="text-3xl font-semibold">45</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-gray-500 text-lg">Task Completion Rate</h3>
                <p className="text-3xl font-semibold">78%</p>
                <Progress value={78} />
              </CardContent>
            </Card>
          </div>
        );
      case "Volunteers":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Volunteer List</h2>
            <ul className="space-y-2">
              {volunteers.map((volunteer) => (
                <li key={volunteer} className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
                  {volunteer} 
                  
                </li>
              ))}
            </ul>
          </div>
        );
      case "Tasks":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Pending Tasks</h2>
            <button className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
              <PlusCircle className="mr-2" /> Create New Task
            </button>
            <ul className="space-y-2">
              <li className="bg-yellow-100 p-3 rounded-md">Weekly Report Submission - Due in 2 days</li>
              <li className="bg-yellow-100 p-3 rounded-md">Plan Volunteer Meetup - Due next week</li>
            </ul>
          </div>
        );
      case "Announcements":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Latest Announcements</h2>
            <button className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
              <PlusCircle className="mr-2" /> Create Announcement
            </button>
            <p className="bg-blue-100 p-3 rounded-md">Meeting scheduled for all volunteers on Monday at 10 AM.</p>
          </div>
        );
      case "Messages":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Message Volunteers</h2>
            <ul className="space-y-2 mb-4">
              {volunteers.map((volunteer) => (
                <li key={volunteer} className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
                  {volunteer} 
                  <button 
                    className="bg-blue-500 text-white px-3 py-1 rounded-md"
                    onClick={() => setSelectedVolunteer(volunteer)}
                  >
                    Select
                  </button>
                </li>
              ))}
            </ul>
            {selectedVolunteer && (
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-semibold">Messaging {selectedVolunteer}</h3>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                ></textarea>
                <button 
                  className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md flex items-center"
                  onClick={handleSendMessage}
                >
                  <Send className="mr-2" /> Send Message
                </button>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-72 bg-blue-700 text-white p-5 space-y-6">
        <h2 className="text-2xl font-bold">Teach For India</h2>
        <nav className="space-y-4">
          {[
            { name: "Dashboard", icon: Home },
            { name: "Volunteers", icon: Users },
            { name: "Tasks", icon: List },
            { name: "Announcements", icon: Bell },
            { name: "Messages", icon: MessageSquare }
          ].map(({ name, icon: Icon }) => (
            <button
              key={name}
              className={`flex items-center space-x-3 p-3 rounded-lg w-full text-left transition ${
                activeTab === name ? "bg-blue-500" : "hover:bg-blue-600"
              }`}
              onClick={() => setActiveTab(name)}
            >
              <Icon className="w-6 h-6" />
              <span className="text-lg">{name}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-4">{activeTab}</h1>
        {renderContent()}
      </div>
    </div>
  );
}
