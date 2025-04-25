import { useNavigate } from "react-router-dom";

function Table({ columns, data }) {
  const navigate = useNavigate();

  return (
    <div className="py-2 max-h-[500px] overflow-y-auto">
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
              className="bg-gray-300 text-lg mt-5 cursor-pointer transition-all duration-200 hover:bg-quaternary hover:text-white hover:font-semibold"
              onClick={() => {
                // Navigate only if row.section exists
                if (row.section) {
                  navigate('/attendance', { state: { sectionName: row.section } });
                }
              }}
            >
              {columns.map((column, colIndex) => {
                const cellValue = row[column.accessor];
                let cellStyle = "";

                // Apply styles based on status
                if (column.accessor === "timeIn" || column.accessor === "timeOut") {
                  if (row.status === "Late" && column.accessor === "timeIn") {
                    cellStyle = "text-red-500";
                  } else if (row.status === "Absent") {
                    cellStyle = "text-gray-500";
                  }
                }

                return (
                  <td key={colIndex} className={`px-4 py-2 ${cellStyle}`}>
                    {cellValue}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
