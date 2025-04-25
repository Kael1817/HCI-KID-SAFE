import Header from "../Components/Header";
import addIcon from "../assets/add-icon.png";
import Tables from "../Components/Tables";

function ClassSection() {
  return (
    <div>
      <Header />
      <div className="body py-10 px-30 h-full">
        <div className="flex justify-between mb-15">
          <h1 className="text-primary font-headings text-5xl">CLASS SECTIONS</h1>
          <button className="bg-primary rounded-lg py-3 px-3 font-headings text-white flex gap-2 cursor-pointer">ADD SECTION <img src={addIcon} alt="icon" className="w-5 h-5"/></button>
        </div>
        <input type="text" className="border rounded-md h-8 p-4 w-90" placeholder="Search"/>

        <Tables 
          data={[
            { date: 'Monday', time: "8:00-9:00", subject: 'Science', year: 'Grade 2', section: "Rizal" },
            { date: 'Tuesday', time: "9:00-10:00", subject: 'Math', year: 'Grade 2', section: "Mabini" },
            { date: 'Wednesday', time: "10:00-11:00", subject: 'English', year: 'Grade 2', section: "Antonio Luna" },
            { date: 'Thursday', time: "11:00-12:00", subject: 'History', year: 'Grade 2', section: "Quezon" },
            { date: 'Friday', time: "12:00-1:00", subject: 'Geography', year: 'Grade 2', section: "Del Pilar" },
            { date: 'Saturday', time: "1:00-2:00", subject: 'Art', year: 'Grade 2', section: "Dadul" },
          ]}
          columns={[
            { header: "Date", accessor: "date" },
            { header: "Time", accessor: "time" },
            { header: "Subject", accessor: "subject" },
            { header: "Year", accessor: "year" },
            { header: "Section", accessor: "section" },
          ]}

        />
      </div>
    </div>
  );
}

export default ClassSection;