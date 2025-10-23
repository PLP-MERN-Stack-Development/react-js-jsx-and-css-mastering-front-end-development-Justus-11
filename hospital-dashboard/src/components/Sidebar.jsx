import React from "react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "🏠" },
    { id: "patients", label: "Patients", icon: "🧍‍♂️" },
    { id: "doctors", label: "Doctors", icon: "👩‍⚕️" },
  ];

  return (
    <div className="w-64 bg-blue-900 text-white flex flex-col">
      <div className="text-center py-6 text-2xl font-bold border-b border-blue-700">
        🏥 MediCare
      </div>

      <ul className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeTab === item.id
                  ? "bg-blue-700 text-white"
                  : "text-gray-300 hover:bg-blue-800"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="p-4 border-t border-blue-800">
        <button
          className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-800 rounded-md transition"
          onClick={() => alert("Logging out...")}
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}
