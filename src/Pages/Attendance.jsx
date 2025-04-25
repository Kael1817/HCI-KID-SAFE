import Header from "../Components/Header";
import { useLocation } from "react-router-dom";
import add from "../assets/add-icon.png";
import Table from "../Components/Tables";

function Attendance() {
  const location = useLocation();
  const sectionName = location.state?.sectionName || null;
  
  return (
    <div>
      <Header />
      <div className="body py-10 px-30 h-full">
        <div className="flex justify-between mb-15">
          <h1 className="text-primary font-headings text-5xl mb-1">ATTENDANCE <span className="text-5xl font-bold text-quaternary font-headings">| {sectionName}</span></h1>
          <button className="bg-primary rounded-lg py-3 px-3 font-headings text-white flex gap-2 cursor-pointer">Add Student <img src={add} alt="icon" className="w-5 h-5" /></button>
        </div>
        <div className="flex justify-between mb-5 items-center">
          <div className="flex gap-3 text-lg rounded-lg p-2">
            <p className="font-bold">Date: </p>
          <input type="date" />
          </div>
          <input type="text" placeholder="Search" className="border border-secondary rounded-lg text-md h-8 p-2" />
        </div>

        <Table 
          data={[
            {no:1 , lrn: "123456789", lastName: "Doe", firstName: "John", middleName: "Smith", status: "Present", timeIn: "8:00 AM", timeOut: "3:00 PM"},
            {no:2 , lrn: "987654321", lastName: "Smith", firstName: "Jane", middleName: "Doe", status: "Absent", timeIn: "N/A", timeOut: "N/A"},
            {no:3 , lrn: "456789123", lastName: "Brown", firstName: "Charlie", middleName: "Johnson", status: "Late", timeIn: "8:30 AM", timeOut: "3:00 PM"},
          ]}
          columns={[
            { header: "No.", accessor: "no" },
            { header: "LRN", accessor: "lrn" },
            { header: "Last Name", accessor: "lastName" },
            { header: "First Name", accessor: "firstName" },
            { header: "Middle Name", accessor: "middleName" },
            { header: "Status", accessor: "status" },
            { header: "Time In", accessor: "timeIn" },
            { header: "Time Out", accessor: "timeOut" },
          ]}
        />
      </div>
    </div>
  )
}

export default Attendance;