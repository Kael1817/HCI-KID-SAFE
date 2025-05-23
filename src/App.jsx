import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login.jsx';
import ResetPassword from './Pages/ResetPassword.jsx';
import ResetThePassword from './Pages/ResetThePassword.jsx';
import LoginModals from './Components/LoginModals.jsx'; 
import Signup from './Pages/Signup.jsx';
import ChooseRole from './Pages/ChooseRole.jsx';
import ParentRegistration from './Pages/ParentRegistration.jsx';
import TeacherRegistration from './Pages/TeacherRegistration.jsx';
import ClassSection from './Pages/ClassSection.jsx';
import ClassInformation from './Pages/ClassInformation.jsx';
import Attendance from './Pages/Attendance.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-the-password" element={<ResetThePassword />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/choose-role" element={<ChooseRole />} />
        <Route path="/parent-registration" element={<ParentRegistration />} />
        <Route path="/teacher-registration" element={<TeacherRegistration />} />
        <Route path="/class-section" element={<ClassSection />} />
        <Route path="/class-information" element={<ClassInformation />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </Router>
  )
}

export default App;
