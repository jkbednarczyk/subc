import React from 'react';
import './styles/global.css';
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
     <Navbar />
     <main className="main-content">
       <Routes>
         <Route path="/" element="" />
         <Route path="/news" element="" />
         {/* Define other routes that you need*/}
       </Routes>
     </main>
   </Router>
 );
};

export default App;
