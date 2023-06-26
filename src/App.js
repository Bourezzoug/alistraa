import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    AOS.init({duration:500});
  },[])
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
