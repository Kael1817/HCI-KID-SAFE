import Header from "../Components/Header"
import Table from "../Components/Tables.jsx"

function ClassInformation() {
  return (
    <div>
      <Header />
      <div className="body py-10 px-30 h-full">
        <div className="flex justify-between mb-15">
          <h1 className="text-primary font-headings text-5xl">CLASS INFORMATION</h1>
        </div>
        <input type="text" className="border rounded-md h-8 p-4 w-90" placeholder="Search"/>

        <div>
        <Table 
        data={[
          {teacher: "John Doe", subject: "Math", day: "Monday", time: "8:00-9:00"},
          {teacher: "Jane Smith", subject: "Science", day: "Tuesday", time: "9:00-10:00"},
          {teacher: "Charlie Brown", subject: "English", day: "Wednesday", time: "10:00-11:00"},
        ]}
        columns = {[
          { header: "Teacher", accessor: "teacher" },
          { header: "Subject", accessor: "subject" },
          { header: "Day", accessor: "day" },
          { header: "Time", accessor: "time" },
          
        ]}
        />
      </div>
      </div>
      
      
    </div>
  )
}

export default ClassInformation