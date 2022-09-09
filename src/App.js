import { Routes, Route,} from "react-router-dom";

import HomePage from './components/HomePage/HomePage';
import Registration from './components/Registration/Registration';
import About from './components/About/About';
import SignupPage from './components/SignupPage/SignupPage';


function App() {
  return (
    <div className='flex flex-col w-full min-h-screen bg-primary-1'>
      <Routes>          
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
