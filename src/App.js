import './App.css';
import UserRegistration from './userRegistration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Easy from './easy';
import Medium from './medium';
import Hard from './hard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserRegistration />} />
        <Route path="/easy" element={<Easy />} />
        <Route path="/medium" element={<Medium />} />
        <Route path="/hard" element={<Hard />} />
      </Routes>
    </BrowserRouter>
   
  );
}


export default App;
