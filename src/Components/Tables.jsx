import { useNavigate } from "react-router-dom";

function Table({ columns, data, getRowUrl }) {
  const navigate = useNavigate();

  return (
    <div className="py-2 overflow-x-auto max-h-[500px] overflow-y-auto">
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
              className="bg-gray-300 text-lg mt-5 cursor-pointer hover:bg-gray-400 transition"
              onClick={() => {
                if (getRowUrl) {
                  const url = getRowUrl(row);
                  navigate(url, { state: { rowData: row } });
                }
              }}
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-2">{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
