import React from 'react';
import './GlobalStyles.css';
import { Navbar } from './components/navbar/Navbar.component';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from './components/home/HomePage.component';
import { PrivacyPolicy } from './components/privacyPolicy/PrivacyPolicy';

function App() {
  return (
    
    <Router>
     <Navbar />
     <main className="main-content">
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
       </Routes>
     </main>
   </Router>
 );
};

export default App;
