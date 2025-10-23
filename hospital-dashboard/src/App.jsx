import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StatsCard from "./components/StatsCard";
import PatientsChart from "./components/PatientsChart";
import PatientsTable from "./components/PatientsTable";
import DoctorsList from "./components/DoctorsList";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />

        <div className="p-6 overflow-auto flex-1">
          {activeTab === "dashboard" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <StatsCard title="Total Patients" value="1,254" />
                <StatsCard title="Admitted Today" value="32" />
                <StatsCard title="Doctors On Duty" value="18" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PatientsChart />
                <DoctorsList />
              </div>
            </>
          )}

          {activeTab === "patients" && <PatientsTable />}

          {activeTab === "doctors" && <DoctorsList />}
        </div>
      </div>
    </div>
  );
}
