import '../index.css';
import logo from '../assets/school_logo.png';

function ParentRegistration() {
  return (
    <div className="body bg-quaternary h-screen flex justify-center">
      <div
        className="content p-10 flex flex-col w-[1000px] h-screen items-center bg-no-repeat bg-cover bg-center rounded-4xl"
        style={{ backgroundImage: `url(${logo})`, opacity: "30%" }}
      >
        
        <h1 className='font-headings text-white text-2xl mb-8'>
          Guardian / Parent Registration
        </h1>

        {/* Form inputs */}
        <input 
          type="text" 
          className='rounded-lg bg-white h-13 w-full p-5 text-lg mb-4' 
          placeholder='Full Name' 
        />
        <input 
          type="text" 
          className='rounded-lg bg-white h-13 w-full p-5 text-lg mb-3' 
          placeholder='Address' 
        />
        <div className='w-full flex justify-between mb-3'>
          <input 
            type="text" 
            className='bg-white rounded-lg h-13 w-[425px] p-5 text-lg' 
            placeholder='Contact Number' 
          />
          <input 
            type="date" 
            className='bg-white rounded-lg h-13 w-[425px] p-5 text-lg' 
            placeholder='Birth Date' 
          />
        </div>

        <p className='text-white text-lg mb-4'>Student's Information</p>

        <input 
          type="text" 
          className='rounded-lg bg-white h-13 w-full p-5 text-lg mb-3' 
          placeholder='Full Name' 
        />
        <input 
          type="text" 
          className='rounded-lg bg-white h-13 w-full p-5 text-lg mb-3' 
          placeholder='Contact Number' 
        />
        <input 
          type="text" 
          className='rounded-lg bg-white h-13 w-full p-5 text-lg mb-3' 
          placeholder='Adviser Name' 
        />
        <div className='w-full flex justify-between mb-7'>
          <input 
            type="text" 
            className='bg-white rounded-lg h-13 w-[425px] p-5 text-lg' 
            placeholder='Grade Level' 
          />
          <input 
            type="text" 
            className='bg-white rounded-lg h-13 w-[425px] p-5 text-lg' 
            placeholder='Section' 
          />
        </div>

        {/* Save button */}
        <div className='w-full flex justify-end'>
          <button className='bg-primary text-lg w-29 text-white p-2 rounded-2xl font-bold cursor-pointer'>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default ParentRegistration;
