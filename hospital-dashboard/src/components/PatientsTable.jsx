import React from "react";

const patients = [
  { id: 1, name: "John Doe", disease: "Flu", status: "Admitted" },
  { id: 2, name: "Mary Wambui", disease: "Malaria", status: "Discharged" },
  { id: 3, name: "Samuel Kim", disease: "Diabetes", status: "Under Treatment" },
];

export default function PatientsTable() {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Patients List</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50 text-left">
            <th className="p-2">#</th>
            <th className="p-2">Name</th>
            <th className="p-2">Disease</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-2">{p.id}</td>
              <td className="p-2">{p.name}</td>
              <td className="p-2">{p.disease}</td>
              <td className="p-2">{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


