import { useState } from "react";

function InfoTable({ columns, data }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleCellClick = (rowData) => {
    setSelectedRow({ ...rowData }); // make a copy for editing
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
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="bg-primary text-white text-xl">
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-2">{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
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

      {showModal && selectedRow && (
        <div className="fixed top-0 left-0 w-full h-full bg-secondary bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[1000px] max-h-[90vh] overflow-y-auto ">
            <h2 className="text-xl font-bold text-primary mb-3 text-center">STUDENT INFORMATION</h2>
            {columns.map((col, index) => (
              <div key={index} className="mb-3 text-left flex gap-2 items-center">
                <label className="flex w-40 font-semibold text-sm mb-1">{col.header}</label>
                {/* Check if the column is one of the editable text fields */}
                {["id", "name", "last name", "middle name", "lrn"].includes(col.accessor) ? (
                  <input
                    type="text"
                    value={selectedRow[col.accessor]}
                    onChange={(e) => handleChange(e, col.accessor)}
                    className="flex w-full border border-gray-400 rounded px-3 py-1"
                  />
                ) : col.accessor === "status" ? (
                  <select
                    value={selectedRow[col.accessor]}
                    onChange={(e) => handleChange(e, col.accessor)}
                    className="flex w-full border border-gray-400 rounded px-3 py-1"
                  >
                    <option value="Absent">Absent</option>
                    <option value="Present">Present</option>
                    <option value="Late">Late</option>
                  </select>
                ) : col.accessor === "timeIn" || col.accessor === "timeOut" ? (
                  <input
                    type="time"
                    value={selectedRow[col.accessor]}
                    onChange={(e) => handleChange(e, col.accessor)}
                    className="flex w-full border border-gray-400 rounded px-3 py-1"
                  />
                ) : (
                  <span>{selectedRow[col.accessor]}</span>
                )}
              </div>
            ))}

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="bg-primary text-white py-2 px-4 rounded hover:bg-blue-700"
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
