import React from 'react';
import './GlobalStyles.css';
import { Navbar } from './components/navbar/Navbar.component';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
     <Navbar />
     <main className="main-content">
      <div className='nova'>
        TEXT
      </div>
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
