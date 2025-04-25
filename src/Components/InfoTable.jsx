import { useState } from "react";
// Import your student data (assuming it's a static JSON file)
import studentData from '../data/student.json';

function InfoTable({ columns, data }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleCellClick = (rowData) => {
    const studentInfo = studentData.find(student => student.id === rowData.id);
    const mergedData = { ...rowData, ...studentInfo }; // Merge rowData with additional data from studentData
    setSelectedRow(mergedData);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRow(null);
  };

  const handleChange = (e, key) => {
    setSelectedRow({ ...selectedRow, [key]: e.target.value });
  };

  const handleUpdate = () => {
    console.log("Updated data:", selectedRow);
    // Add your update logic here (e.g. send to backend or update parent state)
    closeModal();
  };

  return (
    <div className="info-table relative">
      <div className="overflow-x-auto max-h-[356px] overflow-y-auto">
        <table className="w-full border-collapse text-center ">
        <thead>
          <tr className="bg-primary text-white text-xl">
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-2">{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="max-h-[400px] overflow-y-auto"> {/* Scrollable body */}
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="bg-gray-300 text-lg cursor-pointer transition-all duration-200 hover:bg-blue-400 hover:shadow-md hover:font-semibold"
              onClick={() => handleCellClick(row)}
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-2">{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      

      {showModal && selectedRow && (
        <div className="fixed inset-0 bg-secondary bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[1000px] max-h-full">
            <h2 className="text-xl font-bold text-primary mb-3 text-center">STUDENT INFORMATION</h2>

            {/* Display basic student info */}
            <div className="mb-3 text-left flex gap-2 items-center">
              <label className="flex w-40 font-semibold text-sm mb-1">ID</label>
              <input
                type="text"
                value={selectedRow.id || ""}
                onChange={(e) => handleChange(e, "id")}
                className="flex w-full border border-gray-400 rounded px-3 py-1"
              />
            </div>

            <div className="mb-3 text-left flex gap-2 items-center">
              <label className="flex w-40 font-semibold text-sm mb-1">Name</label>
              <input
                type="text"
                value={selectedRow.name || ""}
                onChange={(e) => handleChange(e, "name")}
                className="flex w-full border border-gray-400 rounded px-3 py-1"
              />
            </div>

            <div className="mb-3 text-left flex gap-2 items-center">
              <label className="flex w-40 font-semibold text-sm mb-1">Last Name</label>
              <input
                type="text"
                value={selectedRow.lastName || ""}
                onChange={(e) => handleChange(e, "lastName")}
                className="flex w-full border border-gray-400 rounded px-3 py-1"
              />
            </div>

            <div className="mb-3 text-left flex gap-2 items-center">
              <label className="flex w-40 font-semibold text-sm mb-1">Middle Name</label>
              <input
                type="text"
                value={selectedRow.middleName || ""}
                onChange={(e) => handleChange(e, "middleName")}
                className="flex w-full border border-gray-400 rounded px-3 py-1"
              />
            </div>

            <div className="mb-3 text-left flex gap-2 items-center">
              <label className="flex w-40 font-semibold text-sm mb-1">LRN</label>
              <input
                type="text"
                value={selectedRow.lrn || ""}
                onChange={(e) => handleChange(e, "lrn")}
                className="flex w-full border border-gray-400 rounded px-3 py-1"
              />
            </div>

            <div className="mb-3 text-left flex gap-2 items-center">
              <label className="flex w-40 font-semibold text-sm mb-1">Section</label>
              <input
                type="text"
                value={selectedRow.section || ""}
                onChange={(e) => handleChange(e, "section")}
                className="flex w-full border border-gray-400 rounded px-3 py-1"
              />
            </div>

            <div className="mb-3 text-left flex gap-2 items-center">
              <label className="flex w-40 font-semibold text-sm mb-1">Adviser</label>
              <input
                type="text"
                value={selectedRow.adviser || ""}
                onChange={(e) => handleChange(e, "adviser")}
                className="flex w-full border border-gray-400 rounded px-3 py-1"
              />
            </div>

            <div className="mb-3 text-left flex gap-2 items-center">
              <label className="flex w-40 font-semibold text-sm mb-1">Parent's Name</label>
              <input
                type="text"
                value={selectedRow.parentName || ""}
                onChange={(e) => handleChange(e, "parentName")}
                className="flex w-full border border-gray-400 rounded px-3 py-1"
              />
            </div>

            <div className="mb-3 text-left flex gap-2 items-center">
              <label className="flex w-40 font-semibold text-sm mb-1">Parent's Contact</label>
              <input
                type="text"
                value={selectedRow.parentContact || ""}
                onChange={(e) => handleChange(e, "parentContact")}
                className="flex w-full border border-gray-400 rounded px-3 py-1"
              />
            </div>

            <div className="mb-3 text-left flex gap-2 items-center">
              <label className="flex w-40 font-semibold text-sm mb-1">Address</label>
              <input
                type="text"
                value={selectedRow.address || ""}
                onChange={(e) => handleChange(e, "address")}
                className="flex w-full border border-gray-400 rounded px-3 py-1"
              />
            </div>

            {/* Separate Status, TimeIn, TimeOut */}
            <div className="mb-3 text-left">
              <h3 className="font-semibold text-lg text-center">Attendance Info</h3>
              <div className="flex gap-2 items-center">
                <label className="w-40 font-semibold text-sm">Status</label>
                <select
                  value={selectedRow.status || ""}
                  onChange={(e) => handleChange(e, "status")}
                  className="flex w-full border border-gray-400 rounded px-3 py-1 cursor-pointer"
                >
                  <option value="Absent">Absent</option>
                  <option value="Present">Present</option>
                  <option value="Late">Late</option>
                </select>
              </div>

              <div className="flex gap-2 items-center mt-2">
                <label className="w-40 font-semibold text-sm">Time In</label>
                <input
                  type="time"
                  value={selectedRow.timeIn || ""}
                  onChange={(e) => handleChange(e, "timeIn")}
                  className="flex w-full border border-gray-400 rounded px-3 py-1"
                />
              </div>

              <div className="flex gap-2 items-center mt-2">
                <label className="w-40 font-semibold text-sm">Time Out</label>
                <input
                  type="time"
                  value={selectedRow.timeOut || ""}
                  onChange={(e) => handleChange(e, "timeOut")}
                  className="flex w-full border border-gray-400 rounded px-3 py-1"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="bg-primary text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoTable;
