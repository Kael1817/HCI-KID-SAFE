import '../index.css';
import logo from '../assets/school_logo.png';
import { useNavigate } from 'react-router-dom';

function ParentRegistration() {
  const navigate = useNavigate();

  const Submit = () => {
    navigate('/class-information');
  }
  return (
    <div className="relative flex justify-between py-10 px-70 min-h-screen bg-quaternary">
      
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-contain bg-center pointer-events-none"
        style={{
          backgroundImage: `url(${logo})`,
          opacity: 0.2,
          zIndex: 0,
        }}
      ></div>

        <div className='content flex flex-col items-center justify-center w-full h-full z-10'>
          <h1 className='text-2xl font-bold text-white mb-5'>Guardian / Parent Registration</h1>
          <input type="text" placeholder='Full Name' className='bg-white rounded-lg w-full h-10 p-5 text-lg mb-3' />
          <input type="text" placeholder='Address' className='bg-white rounded-lg w-full h-10 p-5 text-lg mb-3' />
          <div className='flex justify-between w-full mb-5'>
            <input type="text" placeholder='Contact Number' className='bg-white rounded-lg h-10 p-5 text-lg w-[469px]' />
            <input type="date" placeholder='Birth Date' className='bg-white rounded-lg h-10 p-5 text-lg w-[469px] cursor-pointer' />
          </div>
          <p className='text-white text-lg mb-3'>Student Information</p>
          <input type="text" placeholder='Full Name' className='bg-white rounded-lg w-full h-10 p-5 text-lg mb-3' />
          <input type="text" placeholder='Contact Number' className='bg-white rounded-lg w-full h-10 p-5 text-lg mb-3' />
          <input type="text" placeholder='Adviser Name' className='bg-white rounded-lg w-full h-10 p-5 text-lg mb-3' />
          <div className='flex justify-between w-full mb-15'>
            <input type="text" placeholder='Grade Level' className='bg-white rounded-lg h-10 p-5 text-lg w-[469px]' />
            <input type="text" placeholder='Section' className='bg-white rounded-lg h-10 p-5 text-lg w-[469px]' />
          </div>
          <button className='font-bold text-xl bg-primary p-2 rounded-lg text-white cursor-pointer w-full' onClick={Submit}>Save</button>
        </div>
    </div>
  );
}

export default ParentRegistration;
