import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login.jsx';
import ResetPassword from './Pages/ResetPassword.jsx';
import ResetThePassword from './Pages/ResetThePassword.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-the-password" element={<ResetThePassword />} />
      </Routes>
    </Router>
  );
}

export default App;
