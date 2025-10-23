import React, { useState } from "react";

const doctors = [
  { id: 1, name: "Dr. Mercy Kimani", specialty: "Cardiologist", phone: "+254 712 345 678", email: "mercy.kimani@hospital.com" },
  { id: 2, name: "Dr. James Mwangi", specialty: "Dermatologist", phone: "+254 701 223 344", email: "james.mwangi@hospital.com" },
  { id: 3, name: "Dr. Alice Otieno", specialty: "Pediatrician", phone: "+254 710 998 877", email: "alice.otieno@hospital.com" },
  { id: 4, name: "Dr. Kevin Njoroge", specialty: "Neurologist", phone: "+254 713 555 222", email: "kevin.njoroge@hospital.com" },
];

export default function DoctorsList() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleView = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow relative">
      <h2 className="text-xl font-semibold mb-4">Available Doctors</h2>

      <ul className="space-y-3">
        {doctors.map((doc) => (
          <li
            key={doc.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-semibold">{doc.name}</p>
              <p className="text-sm text-gray-500">{doc.specialty}</p>
            </div>
            <button
              onClick={() => handleView(doc)}
              className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition"
            >
              View
            </button>
          </li>
        ))}
      </ul>

      {/* Popup / Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            <h3 className="text-xl font-semibold mb-3">{selectedDoctor.name}</h3>
            <p><strong>Specialty:</strong> {selectedDoctor.specialty}</p>
            <p><strong>Phone:</strong> {selectedDoctor.phone}</p>
            <p><strong>Email:</strong> {selectedDoctor.email}</p>

            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
