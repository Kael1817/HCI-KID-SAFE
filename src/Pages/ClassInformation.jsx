import Header from "../Components/Header"

function ClassInformation() {
  return (
    <div>
      <Header />
      <div className="body py-10 px-30 h-full">
        <div className="flex justify-between mb-15">
          <h1 className="text-primary font-headings text-5xl">CLASS INFORMATION</h1>
        </div>
        <input type="text" className="border rounded-md h-8 p-4 w-90" placeholder="Search"/>
      </div>
      
    </div>
  )
}

export default ClassInformation