import React from 'react';
import './GlobalStyles.css';
import { Navbar } from './components/navbar/Navbar.component';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from './components/home/HomePage.component';

function App() {
  return (
    
    <Router>
     <Navbar />
     <main className="main-content">
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/news" element="" />
         {/* Define other routes that you need*/}
       </Routes>
     </main>
   </Router>
  // <HomePage/>
 );
};

export default App;
