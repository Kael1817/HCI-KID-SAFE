import Header from "../Components/Header";
import { useLocation } from "react-router-dom";
import add from "../assets/add-icon.png";
import Table from "../Components/Tables";
import { useNavigate } from "react-router-dom";
import InfoTable from "../Components/InfoTable";
import StudentsData from "../data/student.json"

function Attendance() {
  const location = useLocation();
  const sectionName = location.state?.sectionName || null;
  const navigate = useNavigate();

  const today = new Date().toISOString().split('T')[0];

  const back = () => {
    navigate("/class-section");
  }

 

  return (
    <div>
      <Header />
      <div className="body py-10 px-30 h-full">
        <div className="flex justify-between mb-15">
          <h1 className="text-primary font-headings text-5xl mb-1">ATTENDANCE <span className="text-5xl font-bold text-quaternary font-headings">| {sectionName}</span></h1>
          <button className="bg-primary rounded-lg py-3 px-3 font-headings text-white flex gap-2 cursor-pointer justify-center items-center">Add Student <img src={add} alt="icon" className="w-5 h-5" /></button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 text-lg rounded-lg p-2">
            <p className="font-bold">Date: </p>
            <input type="date" defaultValue={today} className="cursor-pointer"/>
          </div>
          <input type="text" placeholder="Search" className="border border-secondary rounded-lg text-md h-8 p-2" />
        </div>
        <div className="py-2 max-h-[500px] overflow-y-auto mb-30">
        <InfoTable 
          data={StudentsData}
          columns={[
            { header: "No.", accessor: "id" },
            { header: "LRN", accessor: "lrn" },
            { header: "Last Name", accessor: "last name" },
            { header: "First Name", accessor: "name" },
            { header: "Middle Name", accessor: "middle name" },
            { header: "Status", accessor: "status" },
            { header: "Time In", accessor: "timeIn" },
            { header: "Time Out", accessor: "timeOut" },
          ]}
        />
        </div>
        <div className="flex justify-between ">
            <button className="bg-primary rounded-lg py-3 px-3 font-bold text-white flex gap-2 cursor-pointer w-25 justify-center items-center" onClick={back }>BACK</button>
            <div className="flex gap-5">
              <button className="bg-primary rounded-lg py-3 px-3 font-bold text-white flex gap-2 cursor-pointer w-35 justify-center items-center">Generate PDF</button>
              <button className="bg-primary rounded-lg py-3 px-3 font-bold text-white flex gap-2 cursor-pointer w-35 justify-center items-center">ON SCANNER</button>
              <button className="bg-primary rounded-lg py-3 px-3 font-bold text-white flex gap-2 cursor-pointer w-35 justify-center items-center">OFF SCANNER</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Attendance;