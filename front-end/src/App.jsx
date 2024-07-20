import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import HomePage from './pages/home/Home';



function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
