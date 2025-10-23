import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-700">Hospital Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600 font-medium">Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="Admin"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </header>
  );
}
