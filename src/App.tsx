import {FC} from 'react';
import './GlobalStyles.css';
import { Navbar } from './components/navbar/Navbar.component';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from './components/home/HomePage.component';
import { PrivacyPolicy } from './components/privacyPolicy/PrivacyPolicy.component';
import { ContactPage } from './components/contact/ContactPage.component';
import { AboutUsPage } from './components/aboutUs/AboutUsPage.component';
import { PurchasePage } from './components/purchase/PurchasePage.component';

interface AppProps {
  language: string;
}

const App: FC<AppProps> = (props) => {
  return (
    <Router basename="/subc">
     <Navbar language={props.language}/>
     <main className="main-content">
       <Routes>
         <Route path = "/" element = {<HomePage />} />
         <Route path = "/privacyPolicy" element = {<PrivacyPolicy />} />
         <Route path = "/aboutUs" element = {<AboutUsPage />} />
         <Route path = "/purchase" element = {<PurchasePage />} />
         <Route path = "/contact" element = {<ContactPage />} />
       </Routes>
     </main>
   </Router>
 );
};

export default App;
